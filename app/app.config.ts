export default defineAppConfig({
  ui: {
    colors: {
      primary: 'vernaillen',
      neutral: 'zinc'
    },
    variables: {
      light: {
        background: '245 245 245'
      },
      dark: {
        background: '12 12 13'
      }
    },
    container: {
      base: 'max-w-xl'
    },
    accordion: {
      slots: {
        item: 'rounded-lg mt-2 slide-enter z-10 opacity-0 scale-80',
        header: 'rounded-lg px-4 text-gray-700 dark:text-gray-200 bg-white hover:bg-primary-300 hover:bg-opacity-40 disabled:bg-gray-50 dark:bg-gray-700 dark:hover:bg-primary-900 dark:disabled:bg-gray-600',
        trigger: 'cursor-pointer items-center flex justify-center'
      }
    }
  },
  uiPro: {
    pageSection: {
      slots: {
        container: 'py-6 sm:py-8 lg:py-12 gap-6 sm:gap-y-6',
        description: 'text-gray-500 dark:text-gray-300',
        title: 'lg:text-4xl'
      }
    }
  }
})
