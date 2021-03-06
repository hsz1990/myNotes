module.export = {
	chainWebpack: config => {
	    const jsonRule = config.module.rule('json')
	    // 清除已有的所有 loader。
	    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
	    svgRule.uses.clear()
	    // 添加要替换的 loader
	    svgRule
	      .use('json-loader')
	        .loader('json-loader')
  	}
}