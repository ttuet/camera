source ./VERSION

K_DOCKER_IMG=$REGISTRY_SERVER/$REGISTRY_NAMESPACE/$REGISTRY_IMG_NAME:$K_VERSION

echo "Pack service to docker image $K_DOCKER_IMG"

docker build -t $K_DOCKER_IMG .
docker push $K_DOCKER_IMG
docker rmi $K_DOCKER_IMG
