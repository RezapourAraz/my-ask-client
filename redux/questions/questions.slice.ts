import { apiSlice } from "../api/api.slice";

const questionSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllQuestions: builder.query({
      query: ({ page, limit }) => {
        const baseUrl = "/questions";

        const searchParams = new URLSearchParams();

        if (page && limit) {
          searchParams.set("limit", String(limit));
          searchParams.set("page", String(page));
        }

        const requestUrl = `${baseUrl}${
          searchParams.toString() ? `?${searchParams.toString()}` : ""
        }`;

        return {
          url: requestUrl,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAllQuestionsQuery } = questionSlice;
