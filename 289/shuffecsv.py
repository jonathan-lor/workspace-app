#f = open("test.csv", "x")
import random
drillArray = []

f = open("DrillData.csv", "r")

lines = f.readlines()
for line in lines:
    drillArray.append(line)


f.close()

trimmedDrillArray = drillArray[1:52]

random.shuffle(trimmedDrillArray)



fw = open("DrillDataLab2.csv", "w")

fw.write(drillArray[0])

for item in trimmedDrillArray:
    fw.write(item)

fw.close()