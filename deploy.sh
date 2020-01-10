docker build -t ztaylor510/multi-client:latest -t ztaylor510/multi-client:$GIT_SHA ./client/Dockerfile ./client
docker build -t ztaylor510/multi-server:latest -t ztaylor510/multi-client:$GIT_SHA ./server/Dockerfile ./server
docker build -t ztaylor510/multi-worker:latest -t ztaylor510/multi-client:$GIT_SHA ./worker/Dockerfile ./worker
docker push ztaylor510/multi-client:$GIT_SHA
docker push ztaylor510/multi-server:$GIT_SHA
docker push ztaylor510/multi-worker:$GIT_SHA
kubectl apply -f k8s
kubectl set image deployments/server-deployment server=ztaylor510/multi-server:$GIT_SHA
kubectl set image deployments/client-deployment client=ztaylor510/multi-client:$GIT_SHA
kubectl set image deployments/worker-deployment worker=ztaylor510/multi-worker:$GIT_SHA