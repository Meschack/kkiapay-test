.PHONY: push

.SILENT: echo

M?="Changes..."
OK_COLOR = \033[0;32m
NO_COLOR = \033[m

push:
	cd client
	git config core.autocrlf
	git add .
	git commit -m $(M)
	git push

echo:
	echo Local commits have been successfully pushed to the remote repository