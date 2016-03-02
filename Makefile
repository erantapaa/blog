all:
	jekyll serve --draft --incremental
	# if there are errors add the --trace flag

deploy:
	git push origin master
	./deploy.sh "deploying to maurizzzio.github.io"
