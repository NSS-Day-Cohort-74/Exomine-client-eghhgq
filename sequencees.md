title Exomine

participant DOM
participant Main
participant EventListeners
participant selectMenus
participant MineralsDisplay
participant SpaceCart
participant TransientState
participant database

Main->EventListeners: can you create some event listeners for me
Main<--EventListeners: sure
Main-->DOM: here are some event listeners

Main->selectMenus: can you get the html for the select menus

selectMenus->database:i need data
selectMenus<--database: sure

Main<--selectMenus:sure

Main->SpaceCart: can you give me the Space Cart html
Main<--SpaceCart: sure

DOM->EventListeners: select menu change

EventListeners-> MineralsDisplay: can you gen some html
MineralsDisplay->database: i need data
MineralsDisplay<--database: here ya go
EventListeners<-- MineralsDisplay: sure

EventListeners-->DOM: heres some html
 

DOM->EventListeners: button has been click

EventListeners->TransientState: button clicked

EventListeners->MineralsDisplay: i need updated html
EventListeners<--MineralsDisplay: here.

DOM<--EventListeners: new html
TransientState->database: i need to change some values
note over database: values changed
