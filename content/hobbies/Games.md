---
title: Games
bookCollapseSection: true
weight: 1125
---


Occasionally, I also play games. Not as much as in my youth, and rarely more than one game at time. But I do like games, even if I don't consider myself a gamer in the modern sense (and surely neither a pro...).

Here I collect a few links and tips about games I enjoy(ed).

<!-- vim-markdown-toc GFM -->

* [Europa Universalis IV](#europa-universalis-iv)

<!-- vim-markdown-toc -->

## Europa Universalis IV

{{% expand title="A table with all the EUIV cheat codes" %}}
| Command Name  | Syntax  | Description |
|---------------|---------|-------------|
| absolutism | absolutism [amount] [country tag] | This console command adds the specified amount (number) of absolutism to the country you are playing as. If a country tag is specified as a second argument, absolutism will be added to this country. Negative numbers can be used to decrease the absolutism of a country. |
|add_to_curia_treasury | add_to_curia_treasury [amount] | This command adds the specified amount of money to the Curia Treasury. Specify a negative number to remove money from the Curia Treasury. DLC: Emperor|
|add_unrest | add_unrest [cid type] [cid index] [amount] | This console command adds the specified amount of unrest (advancement) to the specified faction. See argument information for help with CID Type and Index.|
|age_consort | age_consort [years] [country tag] | This cheat sets the age of your country's consort to the specified amount of years. You can optionally specify a country tag as a second argument, if provided, this command will affect the country with this tag instead of your own. DLC: Rights of Man|
|age_ruler | age_ruler [years] [country tag] | This console command sets the age of your ruler to the specified amount of years. Specifying a country tag as a second argument will result in this command changing the age of that country's ruler.|
|ai_army_tick | ai_army_tick [country tag] [file name] |This debug command initiates a forceful reevaluation of all planned army movements by the AI. It is useful to make an army reevaluate decisions if conditions have changed but the game is not updating. If a country tag is specified, the army of the country with this tag will be reevaluated. If, as a second argument, a file name is provided (e.g. armylog.txt), a log of the reevaluation will be saved to this file (which can then be found in your game's installation directory).|
|ai_budget || ai_budget | This debug command will print debug data for the AI budget relating to the country you are playing as. Useful for debugging issues related to AI budgets.|
|ai_plan_regions | ai_plan_regions [country tag] | This debug command initiates a forceful reevaluation of all region assignments for the AI of your current country. If a country tag is specified as an argument, this command will apply to the country with that tag.|
|army_drill | army_drill [amount] [country tag] | This console command sets the drill for all sub units to the specified amount. The maximum amount is 100. If you specify a country tag as a second argument, the country with this tag will have their drill affected. Otherwise, this command will apply to the country you are playing as. DLC: Cradle of Civilization|
|assert | assert [trigger] | This debug command asserts the specified trigger.|
|assimilate || assimilate [province id] [country tag] |This console command assimilates the province with the specified ID. When a province is assimilated, ownership is switched over (to the assimilating country), it is cored, and both its culture and religion are changed to that of the assimilating country. If you do not specify a country tag as an argument, the country you are playing as will assimilate, otherwise, the country with the specified tag will assimilate the province.|
|center_of_trade | center_of_trade [level] [province id] | This console command creates a center of trade with the specified level (1-3) in the specified province. If the province is already a center of trade, its level will be adjusted to the specified level.|
|change_culture_court | change_culture_court [court member id] [culture id] | This command sets the culture of the specified court member. See argument information for court member types and culture IDs.|
|change_religion_court || change_religion_court [court member id] [religion id] | This command sets the religion of the specified court member to the religion with the specified ID. See eu4cheats.com/religions for religion IDs.|
|check_save |check_save |This debug command will debug your game's save system. In the background, it works by simulating a save twice and checking that the two saves are the same. If they are different, there is a problem (because two save files made at the same time should be identical).|
|clearae | clearae [country tag] [country tag] | This console command will clear any aggression expansion between the two countries with the specified country tags. The first country tag is for the country you wish to clear the aggressive expansion towards. The second country tag (optional) is for the the country that is imposing the aggressive expansion. If you do not specify a second country tag, aggressive expansion from all nations towards the specified country will be reset.|
|clearreforms | clearreforms [country tag] |This console command will clear all government reforms for the country with the specified country tag. If you do not specify a country tag, government reforms for the country you are playing as will be cleared.|
|CrashReporter.DeleteCrashData | crashreporter.deletecrashdata [days] | This debug command can be used to free up space from crash dumps. All crash dumps older than the specified amount of days will be deleted.|
|CrashReporter.SimulateCrash | crashreporter.simulatecrash | This debug command crashes the game. Developers, modders, and curious players may wish to simulate a crash for debugging purposes.|
|CrashReporter.UploadCrash || crashreporter.uploadcrash | This debug command will upload your game's latest crash dump.|
|ct || ct |This command will copy to your clipboard all timer info.|
|cv || cv [province id] | This debug command copies the version number of your Europa Universalis IV installation / game to your clipboard.|
|debug_crownland | debug_crownland [country tag] | This debug command starts a log for all crownland changes for the country with the specified country tag.|
|devotion | devotion [amount] [country tag] | This console command sets the devotion of the country with the specified tag to the specified amount. If you do not specify a country tag as a second argument, the command will apply to the devotion of the country you are currently playing as.|
|echo | echo [message] |This debug command prints the message that follows to the console. 'echo test 123'​【37 m】 would print 'test 123'​【37 m】 to the console.|
|enable_all_commands | enable_all_commands | This debug command prints to the console 'Not Successful'. It is believed that the original function of this command was removed before the game was released.|
|enable_game_controller | enable_game_controller |This is a toggle command. If game controller support is disabled (default), typing this command will turn it on. If game controller support is enabled, typing this command will turn it off.|
|estate_agenda | estate_agenda [agenda id] | This console command starts the estate agenda with the specified ID.|
|fast_colonize || fast_colonize | This is a toggle command that turns instant colonization on and off. Instant colonization, as you might've guessed, makes colonization instant. This command will also affect AI countries making them instantly colonize too. By default, typing this command will turn on instant colonization. If instant colonization has been turned on, typing this command will turn it off.|
|findcommands | findcommands [text] | This command will find and print a list of commands with the specified text in their name or description.|
|flagship_galley | flagship_galley [name] [ability id] [ability id] [ability id] | This console command will create a galley with the specified name and abilities as a flagship. See arguments for ability IDs.|
|flagship_heavy | flagship_heavy [name] [ability id] [ability id] [ability id] | This console command will create a heavy ship with the specified name and abilities as a flagship. See arguments for ability IDs.|
|flagship_light | flagship_light [name] [ability id] [ability id] [ability id] | This console command will create a light ship with the specified name and abilities as a flagship. See arguments for ability IDs.|
|heir_history | heir_history | This debug command prints to the console heir history.|
|highlight_islands | highlight_islands [threshold] | This debug command will highlight all provinces that would be classified as an island under the specified threshold (as in, those that the 'Province is on an island' condition would apply to).|
|imperial_incident | imperial_incident [imperial incident id] | This cheat command starts the imperial incident with the specified ID. DLC: Emperor|
|incident | incident [shinto incident id] [country tag] | This console command starts the incident with the specified ID for the country with the specified country tag. If you do not specify a country tag, the incident will start in the country you are playing as. Note that this command applies to the Shinto religion. DLC: Mandate of Heaven|
|innovativeness | innovativeness [amount] [country tag] | This command adds the specified amount of innovativeness to the country with the specified tag. If you do not specify a country tag, the country you are playing as will be affected. If you do not specify an amount, the default amount is 100. Specifying a negative amount reduces innovativeness. DLC: Rule Britannia|
|insult | insult [country tag] [country tag] [insult id] |This console command sends the specified insult from one country to another. DLC: Dharma|
|invasion_target | invasion_target [province id] | This command sets the AI's invasion target to the province with the specified ID.|
|invest | invest [investment id] [province id] | This is a toggle command, it will enable or disable the Trade Company Investment with the specified ID for the specified province. DLC: Dharma|
|isolationism | isolationism [amount] | This command sets the isolation level (0 - 4) of the country you are playing as to the specified number. Note that this command applies to the Shinto religion. DLC: Common Sense|
|kill_advisors | kill_advisors [country tag] | This cheat command kills all court advisors (along with those from the pool) for the country with the specified country tag.|
|landing_page | landing_page [dlc key] |This debug command shows the landing page for the DLC with the specified key.|
|make_subject | make_subject [country tag] [country tag] [subject type id] |This console command makes a country a subject of another country. See argument information for subject types and IDs. If you do not specify a second country tag, the country tag you specify will become subject of the country you are playing as.|
|meritocracy | meritocracy [amount] [country tag] |This command sets the Chinese Emperor of the specified country's meritocracy to the specified amount. DLC: Mandate of Heaven|
|mission | mission [mission id] | This is a toggle command. If mission completion for the specified mission ID is enabled, typing this command will enable it. Otherwise, it will disable it.|
|norevolts | norevolts | This is a toggle command. If revolts are enabled, running this command will turn them off. If revolts are disabled, using this command will turn them back on.|
|nowar | nowar | This is a toggle command. If AI war declarations are turned on, using this command will turn them off (default). If they are already disabled, running this command will re-enable them. AI war declarations are declarations of war from countries that aren't controlled by players.|
|pass_next_reform | pass_next_reform [reform id] | This console command adds the reform with the specified ID to the Holy Roman Empire. See argument information for reform IDs.|
|pick_golden_bull | pick_golden_bull [golden bull id] | This command will give the Pope the Golden Bull with the specified ID. See argument information for Golden Bull IDs.|
|powerspend_count | powerspend_count | This debug command writes to the games log (game.log in installation directory) the amount of times that powerspend has been executed.|
|print_estate_land_share | print_estate_land_share | This debug command logs to the console the current land shares for estates or crowns.|
|print_modifiers | print_modifiers | This debug command prints to file (stored in Documents\Paradox Interactive\Europa Universalis IV) the current gamestate modifiers.|
|reform_desire | reform_desire [amount] |This console command adds the specified amount of reform desire to your current country.|
|reformprogress |reformprogress [amount] [country tag] | This console command adds the specified amount of Government reform progress to the country with the specified country tag. If you don't specify a country tag as the second argument, this command will appy to the country that you are playing as. If you do not specify an amount, the default (500) will be added.|
|refresh_knowledge | refresh_knowledge | This debug command will refresh to performance counter for knowledge.|
|religious_school | religious_school [religious school id] [country tag] | This console command sets the religious school for the country with the specified country tag. If no country tag is specified, this command will apply to the country that you are playing as. See argument information for religion school IDs. DLC: Cradle of Civilization|
|repair |repair [country tag] | This cheat command will instantly repair all ships belonging to the country with the specified country tag.|
|reshuffle_seat_bribes | reshuffle_seat_bribes | This console command reshuffles bribes for all parliament seats. DLC: Common Sense|
|run_commands | run_commands [file name] | This console command will run all of the commands within the file with the specified name. See argument information for where to place the file.|
|runyear | runyear [year] [file name] |This console command will run the commands within the file with the specified name when the game year hits the specified year. See argument information for where to place the file.|
|set_base_manpower | set_base_manpower [province id] [value] | This command sets the base manpower (multiplier) for the province with the specified ID to the specified value. Base manpower is the multiplier used in the calculation for province manpower. Province manpower is base manpower * manpower efficiency * local autonomy.|
|set_base_production | set_base_production [province id] [value] | This command sets the base production efficiency (multiplier) for the province with the specified ID to the specified value. Base production efficiency is the multiplier used in the calculation for province production income, trade value, and goods produced.|
|set_base_tax | set_base_tax [province id] [value] |This command sets the base tax (multiplier) for the province with the specified ID to the specified value. Base tax is used in the calculation for province tax income. Province tax income is (base tax + local tax income) / 12 * tax income efficiency * (1 - local autonomy).|
|spread_revolution | spread_revolution [province id] | This console command will spread the revolution to the province with the specified ID. DLC: Emperor|
|startup_screen |startup_screen |This is a debug command that creates and opens up a new startup screen (the screen that loads when you open the game).|
|stop | stop [date] | This console command will pause the game when the specified in-game date is reached (i.e. not your computer/real life date).|
|syntheticdawn | syntheticdawn [country tag] | This console command will change the country with the specified tag to Synthetics. Synthetics is an easter egg state that can only be created through this console command.|
|test | test [code test id] | This debug command runs the code test with the specified code test ID.|
|test_neighbour |test_neighbour [country tag] | This debug command prints information to the console regarding the neighbour status of the country with the specified tag and the country that you are playing as.|
|timer_dump |timer_dump |This debug command prints data from timing tests to the game's log file.|
|timer_show |timer_show |This is a toggle command, it enables and disables the display of timing related data on your screen.|
|tributary | tributary [country tag] | This console command makes the country with the specified country tag a Tributary state. DLC: Mandate of Heaven|
|verify_loc |verify_loc |This debug command can be used to verify localization keys. Any keys that are unlocalized will be saved to the games log file (at Documents\Paradox Interactive\Europa Universalis IV\logs).|
|writetestentities | writetestentities | This debug command prints a list of test entities for all nations to the local_temp.log file which can be found at Documents\Paradox Interactive\Europa Universalis IV\logs.|
|zeal | zeal [amount] [country tag] | This console command adds the specified amount of Revolutionary Zeal to the country with the specified country tag. DLC: Emperor|
|zombie |zombie |This is a toggle debug command. If army debug is disabled (default), running this command will enable it, otherwise it will disable it.|
|age | age [game age] |This command can be used to change the age of the game to Age of Exploration, Age of Reformation, Age of Absolutism or Age of Revolution. See argument information for the game IDs (0-3). DLC: Mandate of Heaven|
|age_heir | age_heir [age] [country tag] | This command changes the age of the heir of your current country. If you specify a country tag, the age of the heir of that country will be changed.|
|add_backer |add_backer [province id] | This command makes the province with the specified ID become a backer (in support) of the current issue that is running in parliament. DLC: Common Sense|
|add_baseunrest |add_baseunrest [province id] [amount] | This command adds the specified amount to the specified province's base unrest. Specify a negative amount to remove base unrest.|
|add_cardinal | add_cardinal | This command adds one cardinal to your current nation (provided it is catholic).|
|add_cb |add_cb [casus belli id] [country tag] [country tag] | This command adds the specified Casus Belli against the country with the specified tag. Specify a second country tag to send the Casus Belli from that country, rather than from the country you are currently playing as.|
|add_claim | add_claim [province id] [country tag] | This command claims the province with the specified ID for either your current country, or the country with the specified country tag (if you specify a country tag).|
|add_colonist | add_colonist [country tag] |This command adds a colonist to the country with the specified country tag. NOTE: If the country already has at least one colonist, this command may reset existing colonist stats/values.|
|add_consort | add_consort [country tag] [country tag] | This cheat adds a consort to your current country. If you specify a country tag, the consort will be added to that country. If you specify a second country tag, the consort will be of that nationality. DLC: Rights of Man|
|add_core | add_core [province id] [country tag] | This command makes the province with the specified ID a core of the country it belongs to.|
|add_devastation | add_devastation [province id] [devastation amount] |This command adds the specified amount of devastation to the specified province.|
|add_diplo | add_diplo [country tag] | This command adds a diplomatic enroute to the country with the specified tag.|
|add_faction | add_faction [faction name] |This command adds the faction with the specified name to the country you are currently playing as.|
|add_heir | add_heir [country tag] |This command adds a heir to your country - or the country with the specified country tag (if you specify a country tag). If a heir already exists, this command will replace the heir with a new heir.|
|add_idea_group |add_idea_group [idea group key] [country tag] | This command adds the specified idea group to your country, or the specified country tag. See our idea group ID list for IDs.|
|add_interest | add_interest [country tag] |This command adds a country (specified by a country tag) to your interest.|
|add_issue | add_issue [issue id] | This command adds an issue, specified by its id/key, to parliament. DLC: Common Sense|
|add_liberty_desire |add_liberty_desire [amount] [country tag] | This command can be used to add or remove liberty desire from a country, specified by its country tag.|
|add_local_autonomy |add_local_autonomy [province id] [amount] | This command adds a specified amount of local autonomy to the province with the specified ID.|
|add_loyalty | add_loyalty [estate id] [amount] | This command adds loyalty to the estate with the specified ID. Specify a negative number to remove loyalty. See argument explanation for estate IDs. DLC: The Cossacks|
|add_missionary |add_missionary [country tag] | This command adds a missionary to the country with the specified country tag.|
|add_natives | add_natives [province id] [amount] |This command adds natives to the province with the specified ID. The amount added is equal to the number specified multiplied by 100: an amount of 1 would add 100 natives.|
|add_opinion | add_opinion [source country tag] [target country tag] | This command improves a country's opinion of another country by 100.|
|add_pa |add_pa [country tag] | This cheat adds 10% patriarch authority to the country with the specified tag.|
|add_permanent_claim | add_permanent_claim [province id] [country tag] | This command will make a permanent claim of a province for the specified country. A permanent claim does not expire.|
|add_pi |add_pi [country tag] | This command will add 100 Papal Influence to the country with the specified tag.|
|add_prosperity |add_prosperity [province id] [progress %] | This command can be used to make a province progress further towards prosperity. Specify a negative number to decrease a province's prosperity progress.|
|add_reformlevel | add_reformlevel [amount] | This command can be used to add to the reform level of the Holy Roman Empire.|
|add_republican_tradition | add_republican_tradition [amount] [country tag] | This command will add the specified amount of Republican Tradition to the country with the specified country tag.|
|add_trait | add_trait [ruler trait id] |This command adds the specified trait to the ruler of the country you are currently playing as. DLC: Rights of Man|
|adm | adm [amount] [country tag] |This cheat command adds the specified amount of administrative power to the country with the specified country tag. If you don't specify a country tag, the administrative power will be added to the country that you are playing as. If an amount is not specified, the default (999) will be applied.|
|admiral | admiral [fire] [shock] [maneuver] [siege] [country tag] | This command creates an admiral with the specified shock, fire, maneuver and siege rating. If a country tag is specified, the newly created admiral will be added to that country, if not, the admiral will be added to the country you are playing as.|
|ai_minister | ai_minister [army / diplomacy / trade] |This command will toggle AI for the specified minister (see argument information for IDs).|
|ai |ai [country tag] | This command can be used to toggle (enable and disable) AI for either all nations, or a specified country.|
|aiinvalid | aiinvalid | This is a debug command. When executed, it will print a list of invalid AI command counts.|
|aiview |aiview |This command will enable and disable (toggle) the visibility of verbose AI information.|
|annex | annex [country tag] [country tag] | This cheat will annex the country with the specified tag for either your own country or a specified country.|
|army_tradition |army_tradition [amount] [country tag] | This command will add the specified amount of army tradition to a specified country tag.|
|army_professionalism | army_professionalism [amount] [country tag] | This command will add the specified amount of army professionalism to a specified country tag.|
|authority | authority [amount] [country tag] | This command adds the specified amount of authority to either your own country or the country with the specified tag. Negative numbers will remove authority. DLC: El Dorado|
|autosave | autosave | This command will save the game.|
|balance | balance | This is a debug command. Executing this command will print information about balances to the game.log file (not the console).|
|bearhaslanded | bearhaslanded [province id] | This command spawns Jan Mayen in the specified province.|
|canals |canals |This is a debug command, it is used to debug canals within the map. DLC: Wealth of Nations|
|cash | cash [amount] [country tag] | This command can add or remove money (ducats) from your country's (or a specified country's) treasury. Negative numbers will remove money.|
|change_religion | change_religion [country tag / province id] [religion id] | This command can be used to change the religion of either a country or province, specified by a country tag or province ID. See argument information for religion IDs.|
|church_power | church_power [amount] [country tag] | This command adds the specified amount of church power to the specified country tag (or the country you are playing as if no country tag is specified). DLC: Common Sense|
|clear | clear | This command will clear the console - meaning all messages previously sent to you will be hidden (they are not cleared console log files, just the in-game console).|
|clr_consort_flag | clr_consort_flag [country tag] [flag id] | This command clears a consort flag. DLC: Rights of Man|
|clr_flag | clr_flag [flag id] |This command clears a global flag.|
|clr_prov_flag | clr_prov_flag [flag id] [province id] | This command clears a province flag.|
|collision | collision | This command enables and disables (toggles) the collision box debug information being drawn on the screen. This is useful for debugging issues with collisions, etc.|
|colonize | colonize [province id] |This command colonizes the specified province for your current country. The colonized province will become a core with the province's original characteristics (like religion and culture).|
|combat_dice | combat_dice [number] | This command can be used to set the number the combat dice will roll to, meaning it will no longer be random. 'combat_dice 3'​【91 cm】 would mean the combat dice would always land on 3. Use the command 'combat_dice -1'​【30 cm】 to restore normal functionality (random).|
|combatsound | combatsound [frequency] | This command can be used to change the frequency of the random sounds emitted from the combat view.|
|control | control [province id] [country tag] | This command sets the controller of a specified province to the specified country tag (if no country tag is specified, the country that you're playing as will become the controller).|
|corrupt | corrupt [corruption value] [country tag] | This command will change the corruption of a specified country to the specified amount. Note that this does not add the specified amount of corruption to a country - it sets the corruption to the number entered.|
|country_modifier | country_modifier [country tag] [modifier id] | This command will print the value of the specified modifier for the target country.|
|create_march | create_march [country tag] [country tag] | The command makes the specified country the march of the second specified country.|
|culture | culture [province id] | This cheat command sets the culture of the specified province to the primary culture of the country you are playing as.|
|date | date [yyyy.mm.dd] | This command changes the date of the game to the date specified.|
|debug_info |debug_info |This command enables and disables (toggles) the visibility of debug information.|
|debug_mode |debug_mode |This command enables debug tooltips meaning country tags, province IDs and border distances will be shown to you when you hover over locations in the game.|
|debug_nogui | debug_nogui | This command will toggle the visibility of the game's GUI - with this option in game things like menus and toolbars will be hidden.|
|debug_reload_areas |debug_reload_areas |This command will reload all areas on the map - useful for debugging and fixing bugs.|
|debug_reload_regions | debug_reload_regions | This command will reload all regions on the map - useful for debugging and fixing bugs.|
|declare_war | declare_war [country tag] [country tag] [call allies] | This cheat makes two specified nations (countries) declare war on each other - no casus belli is required.|
|delete_wars | delete_wars [country tag] | This command will end all wars the specified country is engaged in. NOTE: This command will only end wars the country is the aggressor or defender in, not wars they are assisting in (e.g. for allies). Truces are not affected by this command.|
|kill | kill [country tag] |This command will kill the ruler of the specified country.|
|dip | dip [amount] [country tag] |This command will add the specified amount of diplomatic power to your country. If a country tag is specified, the country with this tag will instead have their diplomatic power changed. Negative numbers reduce diplomatic power. Running this command without any arguments adds 999 diplomatic power to your country.|
|diplocount |diplocount |This command is a debug tool - prints diplomatic action debug information and statistics to the game.log file.|
|diplomacy_info |diplomacy_info |This command prints information about diplomatic relations to the game console.|
|disaster | disaster [disaster id] |This command will start the disaster with the specified ID within the country you are currently playing as. To start a distaster within another country, switch to it using the tag command.|
|discover | discover [country tag] [country tag] | This command can be used to discover the capital of the specified country for a specified country.|
|doom | doom [amount] [country tag] | This command adds a specified amount of doom to a country (of the Nahuatl religion). Specify a negative number to remove doom. DLC: El Dorado|
|economy | economy | This is a debug command. Executing this command will cause debug information about the economy to be printed to the game.log file.|
|embrace | embrace [province id] [institution id] |This command will embrace a specified institution within a specified province. If you do not specify an institution, all institutions within the province will be embraced.|
|epicfail | epicfail [country tag] |This command causes all spies belonging to the specified country fail.|
|event | event [event id] [country tag] [option id] |This command will run the event with the specified ID. If a country tag is specified, it will be executed within that country.|
|exhaust | exhaust [amount] [country tag] |This command will add or remove war exhaustion from a specified country.|
|fast_diplo |fast_diplo |This command removes the wait time required for a enroute diplomats to be appointed (ignores the date check).|
|favors |favors [country tag] [amount] | This command adds favor for the country you are currently playing as from the specified country. DLC: The Cossacks|
|fervor |fervor [amount] [country tag] | This command adds the specified amount of fervor to the country with the specified country tag. DLC: Wealth of Nations|
|form_union |form_union [country tag] [country tag] |This command forms a union between the two specified countries.|
|fow | fow [province id] | This command toggles (enables and disables) fog of war (FoW). If a province ID is specified, it will be toggled in that province, if not, it will be toggled in all provinces.|
|frenzy |frenzy |This command enables Great Power Frenzy. Use the command 'frenzy_off' to disable.|
|frenzy_off |frenzy_off |This command disables Great Power Frenzy. Use the command 'frenzy' to enable.|
|fullscreen |fullscreen |This command enables and disables (toggles) fullscreen mode for the game.|
|gamespeed | gamespeed [speed] | This command can be used to change the speed the game runs at. 5 is fastest, 0 is stopped (paused).|
|god | god | This command enables and disables (toggles) god mode. In god mode, you will instantly win all wars you are engaged in or engage with.|
|golden_age |golden_age [country tag] | This command starts a golden age within the country of the specified country tag. DLC: Mandate of Heaven|
|harmonization | harmonization [progress] [country tag] |This command can be used to change a Confucian country's progress towards harmonization. DLC: Mandate of Heaven|
|harmony | harmony [amount] [country tag] |This command adds the specified amount of harmony to the specified Confucian country. DLC: Mandate of Heaven|
|help | help [command] |If executed without a command as an argument, a list of all commands will be printed to the console. If executed with a command as an argument, help for that command will be printed to console.|
|helphelp | helphelp | A joke command - prints the joke response 'No help for you' to the console.|
|helplog | helplog | This command prints a list of all console commands to the game.log file.|
|horde_unity | horde_unity [amount] [country tag] |This command can be used to set the unity of a country's horde to a specified value. DLC: The Cossacks|
|ideadump | ideadump | This command prints a list of all countries and their general ideas to the game.log file.|
|imperial_authority |imperial_authority [amount] [country tag] | This command can be used to increase or decrease the imperial authority of a specified country's emperor.|
|infinite_combat | infinite_combat | This command enables infinite combat mode (unknown).|
|inflation | inflation [amount] [country tag] | This command can be used to increase or decrease inflation within a specified country.|
|integrate | integrate [country tag] [country tag] | This command starts the integration process of one country into another. If the two specified countries are already integrating, this command will instantly complete the integration process.|
|karma | karma [amount] [country tag] | This command adds and removes karma from a specified Buddhist country. DLC: Common Sense|
|kill_cardinal | kill_cardinal [country tag] | This command kills the first cardinal (in the cardinal list) of the specified country.|
|kill_consort | kill_consort [country tag] |This command kills the consort of the specified country. DLC: Rights of Man|
|kill_heir | kill_heir [country tag] | This command kills the heir of the specified country.|
|kill_leader | kill_leader | This command kills a random leader (from any country in the game).|
|leader |leader [fire] [shock] [maneuver] [siege] [country tag] |This command creates a general (military leader) with the specified fire, shock, maneuver and siege characteristics for the specified country.|
|leak | leak | This is a debug tool - it is used to test for memory leaks. May crash the game.|
|leak_gpu | leak_gpu [chunk byte #] [chunk number] |This is a debug tool - it is used to test for GPU memory leaks. May crash the game.|
|legitimacy |legitimacy [amount] [country tag] | The command can be used to change the legitimacy of the specified country's leader.|
|low_memory |low_memory |This command will make the game attempt to reduce the amount of RAM (memory) it is using.|
|lucky | lucky [country tag] | This command enables and disables (toggles) a specified country's lucky nation status. If no country tag is specified, the nation you are playing as will be affected.|
|mandate | mandate [amount] | This command adds the specified amount of mandate to the country you are currently playing as.|
|manpower | manpower [amount] [country tag] | This command adds the specified amount of manpower to the specified country tag. The amount of man power is 1000x the number entered (e.g. 2 would add 2000 manpower).|
|map_random |map_random [seed] | This command can be used to generate/randomize a new part of the map. See argument information for more help.|
|map_vertextextures |map_vertextextures |This command enables and disables (toggles) the visibility of vertex textures in the game map.|
|mapmode | mapmode [map mode #] | This command will change the mode of the game map to the specified map mode.|
|memory |memory |This command prints to console the amount of memory (RAM) the game is currently using.|
|mil | mil [amount] [country tag] |This command can be used to add and remove military power to/from a specified country.|
|humans |humans [amount] | This command adds the specified amount of humans to your current country.|
|msg | msg | This command toggles (enables and disables) the pop up that shows whenever you receive a message.|
|native_uprising | native_uprising [province id] | This command starts a native uprising within the province with the specified ID.|
|navy_tradition |navy_tradition [amount] [country tag] | This command adds the specified amount of navy tradition to the country with the specified country tag.|
|nextsong | nextsong | This command changes the song currently being played (in-game music) to the next song queued in the playlist.|
|nolimit_missions | nolimit_missions | This command removes the limitation that restricts amount of major missions you can choose from.|
|nopausetext | nopausetext | This command shows and hides (toggles) the pause banner in the game's GUI.|
|nudge | nudge | This command shows the nudge tool.|
|observe | observe | This command enables observe mode - meaning the AI will make full control of the game and you will no longer control a country (also known as spectator mode). Use the tag command to resume playing again.|
|oos | oos | This command causes the game client to go out of sync (OOS). Used for debug/development purposes, not recommended for players.|
|own | own [province id] [country tag] | This command changes the owner of a specified province to the specified country. If no country tag is specified, the country you are currently playing as will become the owner of the specified province.|
|own_core | own_core [province id] [country tag] | This command changes the owner of the specified province and also makes it a core of the country with the specified country tag.|
|piety | piety [amount] [country tag] | This command adds and removes piety from countries of the Muslim religion.|
|pirate | pirate [province id] | This command starts a pirate within the province with the specified ID.|
|poll | poll | This is a debug command. It polls valid events.|
|population | population [province id] [amount] | This command adds the specified amount of population to the province with the specified provice ID. Note that this command only works for provinces that are a part of a colony.|
|power | power [stability key / idea group key / tech key] [country tag] | This command adds an idea group to the country with the specified country tag.|
|powerpoints | powerpoints [amount] [country tag] |This command adds the specified amount to all 'power points'. Power points are powers like administrative power, military power, diplomatic power, etc for a country.|
|powerspend |powerspend |This command prints out statistics attaining to power spending for all countries.|
|prestige | prestige [amount] [country tag] | This command can be used to increase or decrease a specified country's prestige.|
|prices | prices |This is a debug command. This will print price information to the game.log file.|
|print_flags | print_flags | This command will print a list of global flags to the console.|
|print_prov_flags | print_prov_flags [province id] |This command will print a list of flags for the province with the specified ID to the console.|
|PrintSynchStuff | printsynchstuff | This command prints the game's 'random count' and the seed of the map.|
|protectorate | protectorate [country tag] [country tag] | This command makes one country protectorate another. A protectorate is a country that is protected and controlled by another.|
|province_modifier | province_modifier [province id] | This command shows the modifier values (boosts, etc) for the specified province ID.|
|reform | reform [province id] | This command will start a reformation within the province with the specified province ID.|
|refreshknowledgecount | refreshknowledgecount | This command will refresh the values on the performance calculator (this command is untested by EU4Cheats, so may not work as intended).|
|reinitchat | reinitchat |This command re-initiates the chat (reloads the chat).|
|reload | reload [file name] |This command reloads the specified file. If you've made changes to a lua or GUi file, this command can reload the file and apply the changes without you needing to restart your game.|
|reload_canals | reload_canals | This command reloads the canals bitmaps.|
|reload_heightmap | reload_heightmap | This command reloads the game's heightmaps.|
|reload_lakes | reload_lakes | This command reloads all lakes existing across the game.|
|reload_map | reload_map |This command reloads the map.|
|reload_provincemap | reload_provincemap |This command reloads the province map.|
|reload_straits | reload_straits |This command reloads all strait vertex buffers.|
|reload_treemap | reload_treemap |The command reloads the game's tree map.|
|reloadfx | reloadfx [map / .fx file] | This command (without any arguments) reloads the game shaders. You can optionally specify either a mapname, postfx or filename (ending in .fx).|
|reloadinterface | reloadinterface | This command reloads the GUI (HUD elements) of the game.|
|reloadloc | reloadloc | This command reloads the game's language files (localisation files located in the 'localisation/' folder).|
|reloadtexture | reloadtexture [texture file] | This command reloads the texture with the specified name.|
|reloadtradewinds | reloadtradewinds | This command reloads the game's trade winds.|
|remove_cb | remove_cb [casus belli id] [country tag] [country tag] |This command removes a casus belli (specified by its ID and the two country tags involved).|
|remove_claim | remove_claim [province id] [country tag] | This command removes a claim a specified country has made on a province.|
|remove_core | remove_core [province id] [country tag] | This command makes the specified province no longer a core of the country it belongs to.|
|remove_defender_faith | remove_defender_faith | If your country has a Defender of the Faith for its religion, this command will remove the title.|
|remove_interest | remove_interest [country tag] | This command removes a country from your country's interest.|
|remove_march | remove_march [country tag] [country tag] | This command makes a country no longer a march of another country.|
|remove_rival | remove_rival [country tag] |This cheat makes the specified country no longer a rival of your current country.|
|remove_trait | remove_trait [ruler trait id] | This command removes the specified trait from the ruler of the country you are currently playing as. DLC: Rights of Man|
|rendertype | rendertype |This command prints the current backend being used for graphical rendering.|
|reset_economy | reset_economy | This command resets the economy statistics (not the economy itself) that are shown when the economy console command is executed.|
|reset_god | reset_god | This command resets the personal deity of your current country. DLC: Wealth of Nations|
|reset_migrate | reset_migrate | This command ends the cooldown that limits how fast you can migrate. Note that this will end a cooldown that is currently in place, not remove the cooldown for every migration (e.g. if you had to wait 2 minutes before migrating again, executing this command would allow you to migrate again instantly, but there would be another cooldown after). DLC: Conquest of Paradise|
|reset_mission_cancel | reset_mission_cancel [country tag] |This command ends the cooldown that limits how soon a country can start another mission after cancelling a previous mission. Note that, like the reset_migrate command, this only ends the current cooldown in place, a cooldown will be applied again when you next cancel a mission.|
|reset_powerspend | reset_powerspend | This command resets the statistics that show in the 'powerspend' command.|
|revolt | revolt [province id] | This command starts a revolt within the province with the specified ID.|
|revolution_target | revolution_target [country tag] | This command makes the specified country the game's 'revolution target'. Note that there can only be one target of a revolution at any given time in EU4.|
|rgb | rgb [amount] | This command prints a specified amount of random RGB (color) values to the game.log file.|
|run | run [file name] | This command runs a list of commands in a specified file. The file should be located in the game's root directory (the main folder for the game, where EU4.exe is located).|
|russian | russian [amount] | This command adds the specified amount of government ability points to your current country. DLC: Third Rome|
|sailors | sailors [amount] [country tag] |This command adds the specified amount of sailors to the specified country.|
|savegame | savegame | This command saves the game.|
|score | score | This is a debug command. After executing this command, score information will be printed to the game.log file.|
|selflearningai | selflearningai |This command toggles (enables and disables) the games self-learning AI (artificial intelligence).|
|set_consort_flag | set_consort_flag [country tag] [flag] | This command sets the specified consort flag for the specified country tag. Use clr_consort_flag to remove. DLC: Rights of Man|
|set_flag | set_flag [flag] | This command sets the specified global flag. Use clr_flag to remove.|
|set_leader_trait | set_leader_trait [leader trait id] |This command will set your country's military leader's trait to the trait with the specified trait ID.|
|set_prov_flag | set_prov_flag [flag id] [province id] | This command sets the specified flag for the province with the specified ID.|
|setmissionaryprogress | setmissionaryprogress [province id] [progress] |This command can be used to advance the progress of a missionary within a specified province.|
|SetRandomCount | setrandomcount [count] |This command, if executed without any arguments (just 'SetRandomCount'), will set the random count to 0. If a number is provided as an argument, the random count will be set to this.|
|show_ideas | show_ideas [country tag] | This command will print a list of the ideas (with information) for the specified country tag to the game.log file.|
|siege | siege [province id] | This cheat will instantly win the current siege in the specified province.|
|smoothframelog | smoothframelog |This command enables and disables (toggles) smooth frame logging.|
|spawn | spawn [province id] [unit id] | This command spawns the unit with the specified ID within the province with the specified ID.|
|spawnactor | spawnactor [actor / mesh name] [province id] [animation] | This command spawns an actor with the specified name and within the specified province.|
|splendor | splendor | This command gives your current nation 1000 splendor. There is no way to specify another country tag/amount - use the tag command to switch to another country and use this command to add splendor to another country. DLC: Mandate of Heaven|
|spritelevel | spritelevel [level] | This command sets your country's sprite level.|
|spynetwork | spynetwork [country tag] [amount] | This cheat adds spy network points to the specified country tag.|
|stability | stability [amount] [country tag] | This cheat will add the specified amount of stability to the specified country tag.|
|state | state [province id] | This command toggles the state/territory status for a specified province. If the specified province is a territory, it will be made into a state - if it is a state, it will be made into a territory.|
|stats | stats | This command prints statistics to the game.log file.|
|surrender | surrender | This command will make your current country surrender.|
|tag | tag [country tag] | This command will make you play as (switch to) the specified country tag. The country you were playing as before will be controlled by AI. For country tags, see our country tags list.|
|tech | tech [amount] | This command adds the specified amount of levels in all technology types (for your current country).|
|test_achievement | test_achievement [achievement id] | This is a debug command - it tests the specified achievement.|
|testevent | testevent [event id] [character id] | This is a debug command - it tests a specified event (and character).|
|testmission | testmission [mission] | This is a debug command - it tests a specified mission.|
|texture_usage | texture_usage | This command prints information about the game's texture usage to the console.|
|ti |ti |This command enables and disables (toggles) terrain incognita. Terrain ingcognita is the hiding of unknown (i.e. unexplored) parts of the map.|
|time | time | This command prints the current time to the console.|
|timer | timer | This command is a debug tool - it prints collected data for the 'timer_start' command.|
|timer_reset | timer_reset | This command will reset the debug timer (after it has been started with the 'timer_start' command).|
|timer_restart | timer_restart | This command restarts the debug timer. Use 'timer' to see results/data collected.|
|timer_start | timer_start | This command starts the debug timer, use 'timer' to see results/data collected.|
|timer_stop | timer_stop | This command stops the debug timer from collecting data.|
|touch_test | touch_test | This is a debug command. It is used to test touch/collisions.|
|trust | trust [country tag] [amount] | This command adds the specified amount of trust (from your current country) to the specified country tag.|
|update_loc | update_loc [language tag] | This command updates the localisation file for the specified language tag (e.g. 'English').|
|validateevents | validateevents |This is a debug command - it will validate all events (and won't trigger them).|
|vassalize | vassalize [country tag] [country tag] | This command will make the specified country tag a vassal of the second country tag.|
|version | version | This command prints the version of Europa Universalis IV your game is running.|
|victorycard | victorycard | This command will enable victory cards in singleplayer mode.|
|window | window [open / close] [window name] | This command will open (or close if already open) the specified window.|
|winwars | winwars | NOTE: This command has been reported as broken as of an update to warscore calculation. This command will set the warscore of all wars your country is currently engaged in to 100%.|
|yesman | yesman |This command will toggle (enable and disable) yesman mode. In yesman mode, the AI of all countries will instantly accept any proposal/offer you may (regardless of circumstances, etc).|

Source: https://eu4cheats.com/
{{% /expand %}}

[EUIV Country Tag list](https://eu4cheats.com/country-tags)
