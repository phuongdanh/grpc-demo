.PHONY: gen-proto echo gen-node cp-proto
OUTPUT_PATH = ../output
PHP_PLUGIN=/usr/local/bin/grpc_php_plugin

gen-proto:
	@cd ./protos ;\
	Make gen-proto ;\
	

cp-proto:
	@echo "Copying generated code ..."; \
	cp ./protos/output/go/* ./be-golang/protos/ ;\
	cp ./protos/output/nodejs/* ./be-nodejs/protos/ ;\
	cp ./protos/output/js/* ./fe-web/src/protos/ ;\
	echo "Done!";\