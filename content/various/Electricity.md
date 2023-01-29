---
title: Electricity
bookCollapseSection: true
weight: 818
---

{{% expand title="A good answer on how to calculate power consumption" open="true" %}}
The Amp-hours of a battery gives the number of hours it can deliver 1 amp, or 
the number of amps it can deliver for one hour.

Amp-hours = amps x hours.

So a 50Ah battery can run for 50 hours at one amp, or 50 amps for one hour. Or 
2 amps for 25 hours, or 25 amps for 2 hours.

Slight detour:

I suspect for your use you are correct in wanting a deep-cycle battery. Normal 
car batteries, for example, can typically only use 25% of their amp-hour 
capacity. This is because it is not healthy for the battery to be discharged to 
less than 50%; it will shorten its life (the number of charge-discharge cycles 
will be reduced). Also, car battery charging systems are not intelligent, and 
tend not to charge them effectively above 75%. Partly to reduce complexity, 
partly to increase lifespan of the battery.

As for AC-powered battery chargers, none are going to be 100% efficient. Some 
may only be 90% efficient, and some far less efficient.

Back to your question, answering part 1:

For your "Surface" device: If its power adapter says INPUT: 100-240v @ 1A, 
OUTPUT: 12v, 2.58A, That means the Surface would draw 2.58A maximum. 2.58A is 
continuous; this does not mean 2.58A per hour, it means 2.58A maximum every 
second, every minute, every hour. Same thing. But yes, per hour, it would use 
2.58Ah (amp-hours, not amps). (Maximum.) And yes, with less load, fewer amps 
would be drawn at that moment.

So if you wanted to use the Surface for 1 hour at full load, then use the 
formula above to convert amps to amp-hours:

Amp-hours = amps x hours = 2.58 x 1 = 2.58.

So you would need a 2.58Ah capacity battery. Or if you wanted to run it for 10 
hours with the full load, you would need a 25.8Ah capacity battery.

Answering part 2:

Regarding "100-240v". Seeing this on a PSU usually means it can work on any 
voltage in that range, completely automatically, without needing a switch to be 
flipped on it, and without needing an external voltage converter.

However, exactly how much current draws on the different voltages, at the 
INPUT, in other words, the amount it takes from the mains supply, is a big 
question mark. Some PSUs may be 90% efficient under all circumstances: 
different supply voltages, and different loads on its output. However, some 
will not. I have seen some where it is enormously inefficient (50%) at the 
higher voltages. Similarly, some are only 90% efficient under full load. The 
best bet is to take the worst-case input current that is stated on the device, 
(amps) and assume it will draw that for all circumstances.

Your calculations of 8.33Ah and 0.458Ah are wrong, I'm afraid. I'll try to work 
out what you wanted to know:

Assuming you have a 100% efficient inverter, and wanted to run the Surface's 
PSU on it, here's how you would work out the power of the inverter that you'll 
need, and the battery you'd need to supply it. But you should note that the 
inverter will be at most 90% efficient.

If you use a 110v inverter, and the Surface PSU Draws 1A at its INPUT, then the 
Power of the inverter will have to be at least:

Power = Amps x Volts = 1 x 110 = 110 Watts.

As for the battery capacity required, this could be done in different ways, but 
perhaps most logical from your point of view would be to start by working out 
how much the inverter would draw from the battery. Assume 100% efficiency of 
the inverter. Therefore, power in = power out. Above, we calculated the power. 
So now we use the above formula to calculate the current (amps) that the 
inverter will take from the battery.

Power = Amps x Volts 110 watts = amps x 12 Therefore amps (every second, every 
hour, same thing; it's continuous) = 110/12 = 9.16 amps.

So at any moment, the inverter will need to draw 9.16 amps from the battery. If 
you need to power the Surface for one hour, it will use 9.16 Amp-hours of the 
battery's capacity. If you need to run the Surface for 10 hours, it will use 
91.6 Amp-hours of the battery's capacity. (If you're using it for 10 hours, it 
will still only be drawing 9.16 amps. If you're using it for 10 minutes, it 
will also still be drawing 9.16 amps).

To answer your comments on my answer:

Think of amps as speed, and amp-hours as distance. If a runner runs at 
3mph​【4,8 km/h】, then in one hour he will run 3 miles​【4,8 km】. 
If he runs for 10 hours, he will run 30 miles​【48 km】. But whether for 1 
or 10 hours, he will constantly be running at 3 miles​【4,8 km】 per hour.

Let's say he can run a total of 15 miles​【24 km】, like the capacity of a 
battery. He could spread it out, and run at 1mph​【1,6 km/h】 for 15 
hours, or he could run flat out (his peak), at 5mph​【8 km/h】 for 3 
hours.

Or, say he sprints and slowly jogs alternating every half hour: So he would run 
at his peak for half an hour at 5mph​【8 km/h】, then a slow jog at 
1mph​【1,6 km/h】 for half an hour, and repeat. Each hour he would run a 
total of 3 miles​【4,8 km】, so his average speed would be 3 
mph​【4,8 km/h】. So he could do this alternating for a total of 5 hours.

Now back to the "inefficiency" you talk about. Imagine our runner is going up a 
hill. The voltage is equivalent to the steepness of the hill. So if he is going 
4mph​【6,4 km/h】 up a hill with a 1:20 incline, he will be exerting the 
same energy per X amount of time as if he was going 2mph​【3,2 km/h】 up a 
1:10 incline.

Similarly, if a jogger runs 4 miles​【6,4 km】 up a 1:20 incline, he will 
have exerted the same total amount of energy as if he'd run 2 miles​【3,2 
km】 up a 1:10 incline.

Regarding your comment, there is actually no difference between AC and DC in 
all the calculations above - it can basically be ignored for your purposes here 
when calculating amps, voltages, amp-hours and power. (Just don't try running a 
DC device off AC power or vice versa).

If you were to power a 12v Surface with a 12v battery, then if the Surface uses 
2.58 amps, that is exactly how much is drawn from the battery. (But I would not 
recommend this, because the battery's voltage could vary from anywhere between 
10v to 14.5v depending on its state of charge, among other things. The Surface 
could permanently damaged).

If, say you were to power the 12v Surface taking 2.58 amps, via a converter, 
powered by a 6v battery, then with a 100% efficient conversion, 2.58 x 2 = 
5.16A would be drawn from the 6v battery.

I hope that clears things up.

Source: https://electronics.stackexchange.com/questions/167488/how-to-calculate-power-consumption
{{% /expand %}}
