# Start / stop retropie

case "$1" in
    start)
        #Uncomment to debug...
        #echo "$0: started"
        sudo shutdown -r 0
        exit 0
        ;;
    stop)
        #Uncomment to debug....
        #echo "$0: stopped"
        sudo shutdown -h 0
        exit 0
        ;;
    *)
        echo "Usage: $0 {start|stop}" >&2
        exit 1
        ;;
esac
