import DefaultTheme from 'vitepress/theme';
import { main } from "@mono/pkg1"

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    main()
  }
}
