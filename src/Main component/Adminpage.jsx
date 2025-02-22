import { useState, useEffect } from "react";

const AdminPage = () => {
  const [pgData, setPgData] = useState({
    name: "",
    location: "",
    amenities: "",
    price: "",
    rating: "",
    type: "Girls",
  });

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [pgs, setPgs] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPGs();
  }, []);

  const fetchPGs = async () => {
    try {
      const response = await fetch("http://localhost:8000/getAllPGs");
      const data = await response.json();
      if (response.ok) setPgs(data.pgs);
    } catch (error) {
      console.error("Error fetching PGs:", error);
    }
  };

  const handleChange = (e) => {
    setPgData({ ...pgData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    const formData = new FormData();
    Object.keys(pgData).forEach((key) => formData.append(key, pgData[key]));
    if (image) formData.append("image", image);

    try {
      const response = await fetch(
        editingId ? `http://localhost:8000/updatePG?id=${editingId}` : "http://localhost:8000/pgcreate",
        { method: editingId ? "PUT" : "POST", body: formData }
      );

      const data = await response.json();
      if (response.ok) {
        setMessage(editingId ? "PG updated successfully!" : "PG added successfully!");
        setPgData({ name: "", location: "", amenities: "", price: "", rating: "", type: "Girls" });
        setImage(null);
        setImagePreview(null);
        setEditingId(null);
        fetchPGs();
      } else {
        setMessage(data.error || "Failed to process PG");
      }
    } catch (error) {
      setMessage("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (pg) => {
    setEditingId(pg._id);
    setPgData({ ...pg });
    setImagePreview(pg.image ? `http://localhost:8000/uploads/${pg.image}` : null);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this PG?")) {
      try {
        const response = await fetch(`http://localhost:8000/deletePG?id=${id}`, { method: "DELETE" });
        if (response.ok) {
          setMessage("PG deleted successfully!");
          fetchPGs();
        } else {
          setMessage("Failed to delete PG");
        }
      } catch (error) {
        console.error("Error deleting PG:", error);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">{editingId ? "Edit PG Details" : "Add PG Details"}</h2>
      {message && <p className="mb-4 text-center text-green-600">{message}</p>}

      {/* PG Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Name" className="w-full p-2 border rounded" value={pgData.name} onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" className="w-full p-2 border rounded" value={pgData.location} onChange={handleChange} required />
        <input type="text" name="amenities" placeholder="Amenities (comma-separated)" className="w-full p-2 border rounded" value={pgData.amenities} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" className="w-full p-2 border rounded" value={pgData.price} onChange={handleChange} required />
        <input type="number" name="rating" placeholder="Rating (1-5)" className="w-full p-2 border rounded" value={pgData.rating} onChange={handleChange} required />

        <select name="type" className="w-full p-2 border rounded" value={pgData.type} onChange={handleChange}>
          <option value="Girls">Girls</option>
          <option value="Boys">Boys</option>
          <option value="Co-living">Co-living</option>
        </select>

        <input type="file" accept="image/*" onChange={handleImageChange} className="w-full p-2 border rounded" required={!editingId} />

        {imagePreview && <img src={imagePreview} alt="Preview" className="w-full h-32 object-cover mt-2 rounded-lg" />}

        <button type="submit" className={`w-full text-white py-2 rounded ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`} disabled={loading}>
          {loading ? "Submitting..." : editingId ? "Update" : "Submit"}
        </button>
      </form>

      {/* PG List Table */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">All PG Listings</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Name</th>
              <th className="border p-2">Location</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pgs.map((pg) => (
              <tr key={pg._id} className="border">
                <td className="border p-2">{pg.name}</td>
                <td className="border p-2">{pg.location}</td>
                <td className="border p-2">${pg.price}</td>
                <td className="border p-2 flex gap-2">
                  <button onClick={() => handleEdit(pg)} className="bg-yellow-500 text-white px-2 py-1 rounded">Edit</button>
                  <button onClick={() => handleDelete(pg._id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
