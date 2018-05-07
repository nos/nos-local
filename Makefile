.DEFAULT_GOAL := help

help:          ## Show available options with this Makefile
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

.PHONY : run
run:           ## Update the submodule and build neo-local with smart contracts
run:
	@echo "**** Intializing submodules and compiling smart contracts locally ****"
	@git submodule update --init && \
	cd neo-local && \
	cp ../contracts/*.py ./smart-contracts && \
	make
