### HTTP Status Codes

![HTTP Status Codes Infographic](http-status-codes-definition.png)

### OSI Model

![OSI Model](osi-model.png)

### TCP connection states

+ **CLOSED**: No connection
+ **LISTEN**: The local end-point is waiting for a connection request from a remote end-point
+ **ESTABLISHED**: The third step of the 3-way connection handshake was performed. The connection is open
+ **FIN-WAIT-1**: The first step of a 4-way active clsoe was performed. Local end-point has sent a connection termination request to the remote end-point
+ **CLOSE-WAIT**: The local end-point has received a connection termination request and acknowledged it
+ **FIN-WAIT-2**: The remote end-point has sent an acknowledgement for the previously sent connection termination request. The local end-point waits for an active connection termination request from the remote end-point
+ **LAST-ACK**: The local end-point has performed a passive close and initiated an active close by sending a connection termination request to the remote end-point
+ **CLOSING**: The local end-point is waiting for an acknowledgement for a connection termination request before going to the `TIME-WAIT` state
+ **TIME-WAIT**: The local end-point waits for twice the maximum segment lifetime (MSL) to pass before going to `CLOSED` state

![TCP connection states](tcp-connection-states.png)
