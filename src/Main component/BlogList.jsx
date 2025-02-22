// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export default function BlogList() {
//   const [blogs, setBlogs] = useState([]);
//   const [editBlog, setEditBlog] = useState(null);
//   const [updatedMessage, setUpdatedMessage] = useState("");

//   // Fetch blogs from API (GET method)
//   const fetchBlogs = async () => {
//     try {
//       const res = await axios.get("http://localhost:8000/getBlog");
//       setBlogs(res.data); // Assuming API returns an array
//     } catch (error) {
//       console.error("Error fetching blogs:", error);
//     }
//   };

//   // Update a blog post (PUT method)
//   const updateBlog = async (id) => {
//     try {
//       await axios.put(`http://localhost:8000/updateBlog/${id}`, { message: updatedMessage });
//       fetchBlogs(); // Refresh data after update
//       setEditBlog(null); // Close edit mode
//       setUpdatedMessage(""); // Reset input
//     } catch (error) {
//       console.error("Error updating blog:", error);
//     }
//   };

//   // Delete a blog post (DELETE method)
//   const deleteBlog = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8000/deleteBlog/${id}`);
//       setBlogs(blogs.filter(blog => blog._id !== id)); // Remove from UI
//     } catch (error) {
//       console.error("Error deleting blog:", error);
//     }
//   };

//   // Fetch blogs on component mount
//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   return (
//     <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
//       <h2 className="text-3xl font-bold text-gray-800 mb-6">All Blogs</h2>
      
//       <div className="w-full max-w-3xl">
//         {blogs.length === 0 ? (
//           <p className="text-center text-gray-600">No blogs available.</p>
//         ) : (
//           blogs.map(blog => (
//             <div key={blog._id} className="bg-white p-4 rounded-lg shadow-lg mb-4">
//               <h3 className="text-xl font-bold text-gray-800">{blog.userName}</h3>
//               <p className="text-gray-600">{blog.email}</p>
//               <p className="mt-2 text-gray-700">{blog.message}</p>
              
//               {editBlog === blog._id ? (
//                 <div className="mt-3 flex">
//                   <input
//                     type="text"
//                     value={updatedMessage}
//                     onChange={(e) => setUpdatedMessage(e.target.value)}
//                     className="border px-3 py-1 rounded-lg w-full mr-2"
//                   />
//                   <button
//                     onClick={() => updateBlog(blog._id)}
//                     className="bg-green-500 text-white px-4 py-1 rounded-lg"
//                   >
//                     Save
//                   </button>
//                 </div>
//               ) : (
//                 <div className="mt-3 flex justify-between">
//                   <button
//                     onClick={() => { setEditBlog(blog._id); setUpdatedMessage(blog.message); }}
//                     className="bg-blue-500 text-white px-4 py-1 rounded-lg"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => deleteBlog(blog._id)}
//                     className="bg-red-500 text-white px-4 py-1 rounded-lg"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               )}
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }



// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export default function BlogManager() {
//   const [blogs, setBlogs] = useState([]); // Store blogs
//   const [form, setForm] = useState({ userName: "", email: "", message: "" });
//   const [isEditing, setIsEditing] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   // Fetch blogs (GET request)
//   const fetchBlogs = async () => {
//     try {
//       const res = await axios.get("http://localhost:8000/getBlog");
//       setBlogs(Array.isArray(res.data) ? res.data : []); // Ensure data is an array
//     } catch (error) {
//       console.error("Error fetching blogs:", error);
//     }
//   };

//   useEffect(() => {
//     fetchBlogs(); // Load blogs on page load
//   }, []);

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle submit (Create or Update)
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       if (isEditing) {
//         // Update existing blog (PUT request)
//         await axios.put(`http://localhost:8000/updateBlog/${isEditing}`, form);
//       } else {
//         // Create new blog (POST request)
//         await axios.post("http://localhost:8000/createBlog", form);
//       }

//       setForm({ userName: "", email: "", message: "" }); // Reset form
//       setIsEditing(null);
//       fetchBlogs(); // Refresh list
//     } catch (error) {
//       console.error("Error saving blog:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Handle edit (set form with selected blog data)
//   const handleEdit = (blog) => {
//     setForm({ userName: blog.userName, email: blog.email, message: blog.message });
//     setIsEditing(blog._id);
//   };

//   // Handle delete (DELETE request)
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8000/deleteBlog/${id}`);
//       fetchBlogs(); // Refresh list
//     } catch (error) {
//       console.error("Error deleting blog:", error);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//       <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
//           {isEditing ? "Edit Blog" : "Create a Blog"}
//         </h2>

//         {/* Form for Adding/Editing */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="userName"
//             placeholder="Name"
//             value={form.userName}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <textarea
//             name="message"
//             rows="3"
//             placeholder="Message..."
//             value={form.message}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           ></textarea>

//           <button
//             type="submit"
//             className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
//             disabled={isLoading}
//           >
//             {isLoading ? "Saving..." : isEditing ? "Update Blog" : "Create Blog"}
//           </button>
//         </form>
//       </div>

//       {/* Blog List */}
//       <div className="w-full max-w-lg mt-6">
//         <h2 className="text-xl font-semibold text-gray-800 text-center">Blogs</h2>
//         {blogs.length === 0 ? (
//           <p className="text-center text-gray-600 mt-2">No blogs available.</p>
//         ) : (
//           blogs.map((blog) => (
//             <div key={blog._id} className="bg-white p-4 rounded-lg shadow-lg mt-4">
//               <h3 className="text-lg font-bold text-gray-800">{blog.userName}</h3>
//               <p className="text-gray-600">{blog.email}</p>
//               <p className="mt-2 text-gray-700">{blog.message}</p>

//               {/* Buttons for Edit & Delete */}
//               <div className="flex justify-between mt-4">
//                 <button
//                   onClick={() => handleEdit(blog)}
//                   className="px-3 py-1 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(blog._id)}
//                   className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }






import React, { useState, useEffect } from "react";
import axios from "axios";

export default function BlogManagement() {
  const [blogs, setBlogs] = useState([]);
  const [editBlogId, setEditBlogId] = useState(null);
  const [updatedMessage, setUpdatedMessage] = useState("");

  // Fetch blogs from API (GET method)
  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:8000/getBlog");
      setBlogs(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs(); // Load blogs on mount
  }, []);

  // Update blog message (PUT method)
  const updateBlog = async (id) => {
    try {
      await axios.put(`http://localhost:8000/updateBlog/${id}`, { message: updatedMessage });
      fetchBlogs(); // Refresh after update
      setEditBlogId(null);
      setUpdatedMessage("");
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  // Delete blog (DELETE method)
  const deleteBlog = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/deleteBlog/${id}`);
      setBlogs(blogs.filter((blog) => blog._id !== id)); // Remove from UI
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Manage Blogs</h2>

      <div className="w-full max-w-3xl">
        {blogs.length === 0 ? (
          <p className="text-center text-gray-600">No blogs available.</p>
        ) : (
          blogs.map((blog) => (
            <div key={blog._id} className="bg-white p-4 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-bold text-gray-800">{blog.userName}</h3>
              <p className="text-gray-600">{blog.email}</p>

              {editBlogId === blog._id ? (
                <div className="mt-2">
                  <textarea
                    value={updatedMessage}
                    onChange={(e) => setUpdatedMessage(e.target.value)}
                    className="w-full p-2 border rounded-lg"
                  />
                  <div className="flex justify-end mt-2">
                    <button
                      onClick={() => updateBlog(blog._id)}
                      className="px-4 py-1 bg-green-500 text-white rounded-lg mr-2"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditBlogId(null)}
                      className="px-4 py-1 bg-gray-400 text-white rounded-lg"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <p className="mt-2 text-gray-700">{blog.message}</p>
              )}

              <div className="mt-3 flex justify-between">
                {editBlogId === blog._id ? null : (
                  <>
                    <button
                      onClick={() => {
                        setEditBlogId(blog._id);
                        setUpdatedMessage(blog.message);
                      }}
                      className="px-4 py-1 bg-blue-500 text-white rounded-lg"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteBlog(blog._id)}
                      className="px-4 py-1 bg-red-500 text-white rounded-lg"
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
