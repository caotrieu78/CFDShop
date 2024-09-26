import axiosInstance from "../utils/axiosInstance";

export const productService = {
	getProducts(query = "") {
		return axiosInstance.get(`/products${query}`);
	},
	getProductDetail(slug = "") {
		return axiosInstance.get(`/products/${slug}`);
	},
	getProductBySlug(slug = "") {
		return axiosInstance.get(`/products/${slug}`);
	},
	getCategories(query = "") {
		return axiosInstance.get(`/product-categories${query}`);
	},
	getCategories(slug = "") {
		return axiosInstance.get(`/product-categories/${slug}`);
	},
};
