.PHONY: push

.SILENT: push

M?="Changes..."
OK_COLOR = \033[0;32m
NO_COLOR = \033[m

push:
	cd client
	git config core.autocrlf true
	git add .
	git commit -m $(M)
	git push
	echo Local commits have been successfully pushed to the remote repository