const api_base_url = import.meta.env.VITE_API_BASE_URL;

const login_api_url = `${api_base_url}/auth/login`;
const get_profile_api_url = `${api_base_url}/profile`;
export { api_base_url, login_api_url, get_profile_api_url };
