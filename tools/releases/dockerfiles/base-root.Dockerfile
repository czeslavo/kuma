# use only when root is really needed
FROM gcr.io/distroless/base-nossl-debian11:debug

COPY /tools/releases/templates/LICENSE \
    /tools/releases/templates/README \
    /tools/releases/templates/NOTICE \
    /kuma/

SHELL ["/busybox/busybox", "sh", "-c"]