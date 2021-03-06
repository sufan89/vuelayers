import { pick } from '../../util/minilo'

/**
 * @module draw-interaction
 */
import Interaction from './interaction.vue'

/**
 * @alias module:draw-interaction
 */
export default {
  /**
   * @alias module:draw-interaction/interaction
   */
  Interaction,
  /**
   * @param {Vue} Vue
   * @param {VueLayersOptions} [options]
   */
  install (Vue, options = {}) {
    options = pick(options, 'dataProjection')
    Object.assign(Interaction, options)

    Vue.component(Interaction.name, Interaction)
  },
}
