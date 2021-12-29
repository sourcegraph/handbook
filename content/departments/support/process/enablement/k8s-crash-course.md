# Kubernetes Crash Course

<<<<<<< HEAD
The following crash course is intended to provide a new application engineer with the basics they need to get up and running with kubernetes (also called k8s). Kubernetes was developed to make life easier for admins and devOps teams tasked with deploying and maintaining complex web applications. As such, a wide range of devOps subfields, from machine networking, to linux file system permissions, are within the scope of a kubernetes deployment. This document is intended to explore kubernetes broadly, and provide someone new to kubenetes with the basic concepts and tools necessary to navigate a kubernetes application.

## Table of Contents

- [Kubernetes Crash Course](#kubernetes-crash-course)
  - [Table of Contents](#table-of-contents)
  - [What is Kubernetes?](#what-is-kubernetes)
    - [Microservices](#microservices)
    - [Containers](#containers)
    - [Orchestration, Clusters, and Cloud Providers](#orchestration-clusters-and-cloud-providers)

## What is Kubernetes?

> _Kubernetes (also known as k8s or “kube”) is an open source container orchestration platform that automates many of the manual processes involved in deploying, managing, and scaling containerized applications._

The above description is from [Redhat's description](https://www.redhat.com/en/topics/containers/what-is-kubernetes) of _what kubernetes is_, but what is a "container orchestration platform". Lets break down some of these concepts.

### Microservices

Historically web applications were deployed as one complete program refered to now as a monolithic application. These applications were then deployed to a "bare metal" server and maintained by a a system administrator or devOps team. Since then a new _application architecture_ has become popular called a microservice architecture. The basic concept of a microservice architecture is to break one large application into many smaller seperate parts called _services_. These services may then be deployed and maintained seperatly, and working together make up a single application. If you are interested in learning more about the differences between monolithic and microservice applications checkout [this article](https://www.mulesoft.com/resources/api/microservices-vs-monolithic) by Mulesoft.

### Containers

Modern microservice applications make use of _containers_. Containers are like a packeged up machine or service, that can be deployed in many different types of machine without any special customization. A machine running a container is something like a [matryoshka doll](https://en.wikipedia.org/wiki/Matryoshka_doll). The machine running a container is in effect running another smaller machine inside it. These mini machines may be networked together, combining to produce a web application. For a more techincal explanation, containers use linux [cgroups](https://en.wikipedia.org/wiki/Cgroups), to allocate limited cpu resources to a virtual machine like set of processes. You can learn more about containers at this [page](https://cloud.google.com/learn/what-are-containers) from google.

### Orchestration, Clusters, and Cloud Providers

# Kubernetes comes from the greek κυβερνήτης, translated as "helmsman", "pilot", or "governor". This is a fitting term for what the framework is attempting to accomplish. K8s expands on the microservice/container architecture, automating many of the administrative tasks an admin once had to perfom themselves. Consider a manual transmission vs. automatic transmission automobile. When driving a manual transmission, if a driver encounters a steep hill, they must shift into a lower gear to get up the hill. While in an automatic transmission the automobile will detect the added difficulty introduced by the hill and automatically shift into the best suited gear. Kubernetes provides this same type of automation. In the same way that the automatic transmission makes adjustments for increased resistance, kubernetes automates adjustments for, increased application usage, increased resource demands from a service, or unexpected network failures.

The following crash course is intended to provide a new application engineer with the basics they need to get up and running with kubernetes (also called k8s). The course will provide a brief exploration of key kubernetes concepts and administrative operations, as well as information about how these concepts may be employed when working with a kubernetes Sourcegraph deployment.

Kubernetes was developed to make life easier for admins and devOps teams tasked with deploying and maintaining complex web applications. As such, a wide range of devOps subfields, from machine networking, to linux file system permissions, are within the scope of a kubernetes deployment. This document is intended to explore kubernetes broadly, and provide someone new to kubenetes with the basic concepts and tools necessary to navigate a kubernetes application.

> > > > > > > d8d9488f74012a5b9f91cf655f758727b3d59e22
