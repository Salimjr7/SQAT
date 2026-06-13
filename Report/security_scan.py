from zapv2 import ZAPv2
import time

apikey = 'changeme'
target = 'http://localhost:3000'

zap = ZAPv2(apikey=apikey)

print("Accessing target...")
zap.urlopen(target)

print("Starting Spider Scan...")
scan_id = zap.spider.scan(target)

while int(zap.spider.status(scan_id)) < 100:
    print("Spider progress:", zap.spider.status(scan_id) + "%")
    time.sleep(2)

print("Spider Scan Complete")

print("Starting Active Scan...")
scan_id = zap.ascan.scan(target)

while int(zap.ascan.status(scan_id)) < 100:
    print("Active Scan progress:", zap.ascan.status(scan_id) + "%")
    time.sleep(5)

print("Active Scan Complete")

print("\nAlerts Found:")

for alert in zap.core.alerts():
    print("--------------------------------")
    print("Name:", alert['alert'])
    print("Risk:", alert['risk'])
    print("URL:", alert['url'])
