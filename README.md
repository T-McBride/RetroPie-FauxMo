# Summary 
This script will utilitze the node-fauxmo package to emulate a WeMo device. Once configured this will allow you to turn off and reboot your retropie via a smart home controller. 

Makes a nice companion if you are running your pie in kid mode, have menus disabled, or just need someone to go to bed. 

## Usage 

Alexa, turn off RetroPie: will cause the pie to shutdown

Alexa, turn on RetroPie: will cause the pie to reboot (This can not be used to turn on the pie from an off state, obviously)

## Setup 
This setup assumes the user is pi and that the instalation is from the provided iso.

1. Install node and npm and git 
```
apt update 
apt install npm git
```
2. Clone this repo into your home directory
```
cd 
git clone [toadd]
```
3. Ensure that the powerPie.sh script is executeable with
```
chmod +x /home/pi/RetroPie-FauxMo/Scripts/powerPie.sh
```

4. (Optional) Change the comon name and port varables in /home/pi/RetroPie-FauxMo/retropie_fauxmo.js if desired. 

5. Test by starting the server manually and ensuring it can be discovered by your smart home devide. 
```
cd /home/pi/RetroPie-FauxMo/
node /home/pi/RetroPie-FauxMo/retropie_fauxmo.js
```
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Say "Alexa discover devices"<br> 
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; If the device is not discovered by your smart home controller you may need to try a different port.<br>
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Every smart plug used by a smart home controller will require it's own dedicated port. 

6. Configure to run at boot by adding the following as a cronjob. 
```
crontab -e 
```
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; This will open your cron file, add the entry below to the bootom of this file. 

```
@reboot nodejs /home/pi/RetroPie-FauxMo/retropie_fauxmo.js > /home/pi/RetroPie-FauxMo/log.log 2>&1 & 
```

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; This will launch the emulation script in the background at boot and create a log file in the RetroPie-FauxMo directory called log.log 

##Appendix

Origianl node-fauxmo package https://github.com/lspiehler/node-fauxmo


