all:
	jekyll serve --draft
	# if there are errors add the --trace flag

deploy:
	git push origin master
	./deploy.sh "deploying to maurizzzio.github.io"
