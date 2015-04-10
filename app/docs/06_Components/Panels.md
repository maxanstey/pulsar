## Panel

Display important information in a prominent container.

### Example usage

    {{
        html.panel({
            'title': 'In West Philadelphia born and raised',
            'body': 'In the playground was where I spent most of my days.'
        })
    }}

<div class="panel">
    <div class="panel__title">
        <i class="icon-info-sign"></i> In West Philadelphia born and raised
    </div>
    <div class="panel__body">
        In the playground was where I spent most of my days.
    </div>
</div>

### Options

Option  | Description
------- | --------------------------------------------------------------
body    | (string) The main content of the panel
class   | (string) CSS classes, space separated
data    | (hash) data attributes by key/value
icon    | (string) Icon to display next to the panel title
id      | (string) A unique identifier, if required
title   | (strong) The title of the panel




## Variations (class)

The following modifier classes can be applied to the `class` attribute:

 * `.panel--primary`
 * `.panel--info`
 * `.panel--success`
 * `.panel--warning`
 * `.panel--danger`
 * `.panel--inverse`

<div class="panel">
    <div class="panel__title">
        <i class="icon-info-sign"></i> Default panel
    </div>
    <div class="panel__body">
        <p>What you wanna ball with the kid
Watch your step you might fall
Trying to do what I did
Mama-unh mama-unh mama come closer
In the middle of the club with the rub-a-dub, unh</p>
    </div>
</div>

<div class="panel panel--info">
    <div class="panel__title">
        <i class="icon-question-sign"></i> Info panel
    </div>
    <div class="panel__body">
        <p>No love for the haters, the haters
Mad cause I got floor seats at the Lakers
See me on the fifty yard line with the Raiders
Met Ali he told me I'm the greatest
I got the fever for the flavor of a crowd pleaser</p>
    </div>
</div>

<div class="panel panel--success">
    <div class="panel__title">
        <i class="icon-ok-sign"></i> Success panel
    </div>
    <div class="panel__body">
        <p>DJ play another
From the prince of this
Your highness
Only mad chicks ride in my whips
South to the west to the east to the north</p>
    </div>
</div>

<div class="panel panel--warning">
    <div class="panel__title">
        <i class="icon-warning-sign"></i> Warning panel
    </div>
    <div class="panel__body">
        <p>Bought my hits and watch 'em go off a go off
Ah yes yes y'all ya don't stop
In the winter or the (summertime)
I makes it hot
Gettin jiggy wit 'em</p>
    </div>
</div>

<div class="panel panel--danger">
    <div class="panel__title">
        <i class="icon-exclamation-sign"></i> Danger panel
    </div>
    <div class="panel__body">
        <p>Eight-fifty I.S. if you need a lift
Who's the kid in the drop
Who else Will Smith
Livin' that life some consider a myth Rock from south street to one two fifth</p>
    </div>
</div>

<div class="panel panel--inverse">
    <div class="panel__title">
        <i class="icon-remove-sign"></i> Inverse panel
    </div>
    <div class="panel__body">
        <p>Women used to tease me
Give it to me now nice and easy
Since I moved up like George and Wheezy
Cream to the maximum I be askin' 'em
Would you like to bounce with the brother that's platinum</p>
    </div>
</div>