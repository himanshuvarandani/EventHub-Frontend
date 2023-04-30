import api from "."

export const fetchCategories = async () => {
  return api.get("/event/types")
}

export const fetchEvents = async (city, categoryId=0, page=1, limit=10) => {
  return api.get(`/event/events/${city}/${page}/${limit}?categoryId=${categoryId}`)
}
