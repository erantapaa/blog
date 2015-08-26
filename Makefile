all:
	jekyll serve --draft

deploy:
	git push origin source
	./deploy.sh "deploying to maurizzzio.github.io"
