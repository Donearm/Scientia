# Basic commands

+ `kubectl get nodes` = list all nodes in the cluster
+ `kubectl get pods` = list all pods
+ `kubectl get deployments` = list all deployments
+ `kubectl get svc` = list all services
+ `kubectl get pods -n kube-system` = list all system pods
+ `kubeadm init` = initialize the master cluster
+ `kubectl describe pod $podname` = show detailed info about a specific pod
+ `kubectl describe node $nodename` = show detailed info about a specific node
+ `kubectl delete pod $podname` = delete a specific pod. With `node` works with nodes too
+ `kubectl exec $podname $command` = execute a command from within a specific pod in the cluster
+ `kubectl edit deployment $deploymentname -n $namespace` = edit on the fly a deployment from a specific namespace
