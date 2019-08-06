import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
  // The relative path of the components folder
  '../components', 
  // Whether or not to look in subfolders
  true, 
  // The regular expression used to match base component filenames
  /\.vue$/
)

requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName)

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // Gets the file name regardless of folder depth
      fileName
        // Remove the "./_" from the beginning
        .replace(/^\.\//, '')
        // Remove the file extension from the end
        .replace(/\.\w+$/, '')
    )
  )

  // Register component globally
  Vue.component(
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentName, 
    componentConfig.default || componentConfig
  )
})
