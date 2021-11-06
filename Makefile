setup:
	yarn set version berry
	yarn init -w

commands:
	yarn workspaces list  
	git rm -f packages/*/yarn.lock
	



	npx create-react-app cra
	npx react-native init rn
