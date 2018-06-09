git submodule update --init
cd neo-local
copy "..\contracts\*.py" "smart-contracts\"
copy "..\contracts\*.avm" "smart-contracts\"
docker-compose up -d --build --remove-orphans --force-recreate
docker exec -it neo-python np-prompt -p -v 