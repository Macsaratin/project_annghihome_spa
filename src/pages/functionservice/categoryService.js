
import axios from 'axios';

const API_URL = 'http://localhost:4000/api/';

// const categoryService = {
//   // Fetch all categories
//   getAllCategories: async () => {
//     try {
//       const response = await axios.get(`${API_URL}/categories`, {
//         withCredentials: true,  // Đảm bảo rằng cookie được gửi
//         headers: {
//           'Content-Type': 'application/json', 
//           'Accept': 'application/json',
//         }
//       });
//       return response.data;  // Return the list of all categories
//     } catch (error) {
//       console.error("Error fetching categories:", error);
//       throw error;
//     }
//   },
//   // Fetch category by ID
//   getCategoryById: async (id) => {
//     try {
//       const response = await axios.get(`${API_URL}/categories/${id}`);
//       return response.data;  // Return the category found by ID
//     } catch (error) {
//       console.error("Error fetching category by ID:", error);
//       throw error;
//     }
//   },

//   // Create a new category
//   createCategory: async (categoryData) => {
//     const { name, description, imageUrl, isActive, sortOrder, parentId } = categoryData;

//     const data = {
//       name,
//       description: description || null,
//       imageUrl: imageUrl || null,
//       isActive: isActive !== undefined ? isActive : true,
//       sortOrder: sortOrder || 0,
//       parentId: parentId || null,
//     };

//     try {
//       const response = await axios.post(API_URL, data);
//       return response.data;  // Return the newly created category
//     } catch (error) {
//       console.error("Error creating category:", error);
//       throw error;
//     }
//   },

//   // Update an existing category
//   updateCategory: async (id, categoryData) => {
//     const { name, description, imageUrl, isActive, sortOrder, parentId } = categoryData;

//     const data = {
//       name,
//       description: description || null,
//       imageUrl: imageUrl || null,
//       isActive: isActive !== undefined ? isActive : true,
//       sortOrder: sortOrder || 0,
//       parentId: parentId || null,
//     };

//     try {
//       const response = await axios.put(`${API_URL}/${id}`, data);
//       return response.data;  // Return the updated category information
//     } catch (error) {
//       console.error("Error updating category:", error);
//       throw error;
//     }
//   },

//   // Delete a category
//   deleteCategory: async (id) => {
//     try {
//       const response = await axios.delete(`${API_URL}/${id}`);
//       return response.data;  // Return success message after deletion
//     } catch (error) {
//       console.error("Error deleting category:", error);
//       throw error;
//     }
//   }
// };

const categoryService = {
  async createCategory(categoryData) {
    const { name, description, imageUrl, isActive, sortOrder, parentId } = categoryData;
    const data = {
      name,
      description: description || null,
      imageUrl: imageUrl || null,
      isActive: isActive !== undefined ? isActive : true,
      sortOrder: sortOrder || 0,
      parentId: parentId || null,
    };
    try {
      const response = await axios.post(`${API_URL}categories`, data, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });
      return response.data;  // Return the newly created category
    } catch (error) {
      console.error("Error creating category:", error);
      throw error;
    }
  }
  ,
  async getAllCategories() {
    try {
      const response = await axios.get(`${API_URL}categories`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;  // Return the list of all categories
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  },
  async getCategoryById(id) {
    try {
      const response = await axios.get(`${API_URL}categories/${id}`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });
      return response.data;  // Return the category found by ID
    } catch (error) {
      console.error("Error fetching category by ID:", error);
      throw error;
    }
  }
}
export default categoryService;
