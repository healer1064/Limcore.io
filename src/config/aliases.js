const aliases = (prefix = `src`) => ({
  '@app': `${prefix}/app/`,
  '@components': `${prefix}/components`,
  '@config': `${prefix}/config`,
  '@hooks': `${prefix}/hooks`,
  '@icons': `${prefix}/assets/icons`,
  '@images': `${prefix}/assets/images`,
  '@animations': `${prefix}/animations/`,
  '@helpers': `${prefix}/helpers`,
  '@lib': `${prefix}/lib/`,
})

module.exports = aliases
