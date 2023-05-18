.PHONY: gen-proto echo gen-node
OUTPUT_PATH = ../output
PHP_PLUGIN=/usr/local/bin/grpc_php_plugin

gen-proto:
	@echo "Generating the code from protos ..."; \
	cd ./defines ;\
	protoc -I. \
	--go_out=$(OUTPUT_PATH)/go \
	--go-grpc_out=$(OUTPUT_PATH)/go \
	--js_out=import_style=commonjs:$(OUTPUT_PATH)/js \
	--grpc-web_out=import_style=commonjs,mode=grpcwebtext:$(OUTPUT_PATH)/js \
	--js_out=import_style=commonjs:$(OUTPUT_PATH)/nodejs \
	--grpc_out=$(OUTPUT_PATH)/nodejs \
	--plugin=protoc-gen-grpc=/Users/blubberbee/.nvm/versions/node/v14.18.1/bin/grpc_tools_node_protoc_plugin \
	--dart_out=grpc:$(OUTPUT_PATH)/dart \
	./$(file)*.proto ;\
	echo "Done!";\