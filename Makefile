all:
	jekyll serve --draft

deploy:
	git push origin master
	./deploy.sh "deploying to maurizzzio.github.io"
