.PHONY: module scope

default:
	@echo "App suported:"
	@echo " - make scope : ES6 let keywords compared with var and variable scoping"
	@echo " - make module: CommonJs loading modules. Are module code singleton? Yes, module contains an example of this"

scope:
	@node --harmony --use_strict scope.js

module: module/main.js
	@node --harmony --use_strict module/main.js
