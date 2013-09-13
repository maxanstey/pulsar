Create a text input with a variety of options.

----

Available parameters:

	{{ form.text(label, id, class, name, placeholder, help, prepend, append) }}

#### Label

	{{ form.text(label = 'Username') }}

	<div class="form__group">
        <label for="inputText" class="control__label">Username</label>
        <div class="controls">
            <input type="text" class="form__control" />
		</div>
    </div>

<form class="form--horizontal">
<div class="form__group">
    <label for="inputText" class="control__label">Username</label>
    <div class="controls">
        <input type="text" class="form__control" />
	</div>
</div>
</form>

#### ID

	{{ form.text(
		label = 'Username', 
		id = 'userName') }}

	<div class="form__group">
        <label for="inputText" class="control__label">Username</label>
        <div class="controls">
            <input type="text" class="form__control" id="userName" />
		</div>
    </div>

#### Class

The class is added to the `.form__group`, not the individual input.

	{{ form.text(
		label = 'Username', 
		id = 'userName', 
		class = 'form__group--large') }}

	<div class="form__group form__group--large">
        <label for="inputText" class="control__label">Username</label>
        <div class="controls">
            <input type="text" class="form__control" id="userName" />
		</div>
    </div>

#### Name

	{{ form.text(
		label = 'Username', 
		id = 'userName', 
		class = 'form__group--large', 
		name = 'User[name]') }}

	<div class="form__group form__group--large">
        <label for="inputText" class="control__label">Username</label>
        <div class="controls">
            <input type="text" class="form__control" id="userName" name="User[name]" />
		</div>
    </div>

#### Placeholder

	{{ form.text(
		label = 'Username', 
		id = 'userName', 
		class = 'form__group--large', 
		name = 'User[name]', 
		placedholder = 'Enter your username') }}

	<div class="form__group form__group--large">
        <label for="inputText" class="control__label">Username</label>
        <div class="controls">
            <input type="text" class="form__control" id="userName" name="User[name]" placeholder="Enter your username" />
		</div>
    </div>

<form class="form--horizontal">
<div class="form__group form__group--large">
    <label for="inputText" class="control__label">Username</label>
    <div class="controls">
        <input type="text" class="form__control" id="userName" name="User[name]" placeholder="Enter your username" />
	</div>
</div>
</form>

#### Help text

	{{ form.text(
		label = 'Username', 
		id = 'userName', 
		class = 'form__group--large', 
		name = 'User[name]', 
		placeholder = 'Enter your username', 
		help = 'Check your sign-up email.') }}

	<div class="form__group form__group--large">
        <label for="inputText" class="control__label">Username</label>
        <div class="controls">
            <input type="text" class="form__control" id="userName" name="User[name]" placeholder="Enter your username" />
            <p class="help-block">Check your sign-up email.</p>
		</div>
    </div>

<form class="form--horizontal">
<div class="form__group form__group--large">
    <label for="inputText" class="control__label">Username</label>
    <div class="controls">
        <input type="text" class="form__control" id="userName" name="User[name]" placeholder="Enter your username" />
        <p class="help-block">Check your sign-up email.</p>
	</div>
</div>
</form>

#### Prepend

Use to extend your input with useful information which will help to clarify the input you're expecting.

	{{ form.text(
		label = 'Twitter username', 
		id = 'twitterUsername', 
		name = 'User[twitter]'
		prepend = '@') }}

	<div class="form__group form__group--large">
        <label for="inputText" class="control__label">Username</label>
        <div class="controls">
	        <div class="input-group">
		    	<span class="input-group-addon">@</span>
		        <input type="text" class="form__control" id="userName" name="User[name]" />
			</div>
		</div>
    </div>

<form class="form--horizontal">
<div class="form__group">
    <label for="inputText" class="control__label">Twitter 
    username</label>
    <div class="controls">
    	<div class="input-group">
	    	<span class="input-group-addon">@</span>
	        <input type="text" class="form__control" id="twitterUsername" name="User[twitter]" />
		</div>
	</div>
</div>
</form>

#### Append

	{{ form.text(
		label = 'Your website', 
		id = 'url',
		name = 'User[website]', 
		placeholder = 'http://',
		append = '.com') }}

	<form class="form--horizontal">
	<div class="form__group">
	    <label for="inputText" class="control__label">Your website</label>
	    <div class="controls">
	    	<div class="input-group">
		        <input type="text" class="form__control" name="User[website]" placeholder="http://" />
		        <span class="input-group-addon">.com</span>
			</div>
		</div>
	</div>

<form class="form--horizontal">
<div class="form__group">
    <label for="inputText" class="control__label">Your website</label>
    <div class="controls">
    	<div class="input-group">
	        <input type="text" class="form__control" name="User[website]" placeholder="http://" />
	        <span class="input-group-addon">.com</span>
		</div>
	</div>
</div>
</form>