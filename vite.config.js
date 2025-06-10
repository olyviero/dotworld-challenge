import Inspect from "vite-plugin-inspect"
import { resolve } from "path"

export default {
  plugins: [Inspect()],
  base: "/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
}
