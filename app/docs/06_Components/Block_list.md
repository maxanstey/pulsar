### List items

	<ul class="block-list block-list--bordered">
		<li class="block-list__item">
			One
		</li>
		<li class="block-list__item">
			Two
		</li>
		<li class="block-list__item">
			Three
		</li>
	</ul>

<div class="block-list block-list--bordered">
	<li class="block-list__item">
		One
	</li>
	<li class="block-list__item">
		Two
	</li>
	<li class="block-list__item">
		Three
	</li>
</div>

----

### Linked items

	<div class="block-list block-list--bordered">
		<a class="block-list__item" href="#">
			One
		</a>
		<a class="block-list__item" href="#">
			Two
		</a>
		<a class="block-list__item" href="#">
			Three
		</a>
	</div>

<div class="block-list block-list--bordered">
	<a class="block-list__item" href="#">
		One
	</a>
	<a class="block-list__item" href="#">
		Two
	</a>
	<a class="block-list__item" href="#">
		Three
	</a>
</div>

----

### Removable items

	<div class="block-list block-list--bordered">
		<a class="block-list__item" href="#">
			{{ html.remove_button() }}
			One
		</a>
		<a class="block-list__item" href="#">
			{{ html.remove_button() }}
			Two
		</a>
		<a class="block-list__item" href="#">
			{{ html.remove_button() }}
			Three
		</a>
	</div>

<div class="block-list block-list--bordered">
	<a class="block-list__item" href="#">
		<button type="button" class="remove-button" data-toggle="tooltips" data-placement="right" title="" data-action="remove" data-action-target="' ~ target ~ '" data-original-title="Remove this item"><i class="icon-remove-sign"></i></button>
		One
	</a>
	<a class="block-list__item" href="#">
		<button type="button" class="remove-button" data-toggle="tooltips" data-placement="right" title="" data-action="remove" data-action-target="' ~ target ~ '" data-original-title="Remove this item"><i class="icon-remove-sign"></i></button>
		Two
	</a>
	<a class="block-list__item" href="#">
		<button type="button" class="remove-button" data-toggle="tooltips" data-placement="right" title="" data-action="remove" data-action-target="' ~ target ~ '" data-original-title="Remove this item"><i class="icon-remove-sign"></i></button>
		Three
	</a>
</div>

----

### With image previews

	<div class="block-list block-list--bordered">
		<a class="block-list__item" href="#">
			{{ html.remove_button() }}
			<img src="http://www.placecage.com/g/75/50" class="preview" />
			One
		</a>
		<a class="block-list__item" href="#">
			{{ html.remove_button() }}
			<img src="http://www.placecage.com/75/50" class="preview" />
			Two
		</a>
		<a class="block-list__item" href="#">
			{{ html.remove_button() }}
			<img src="http://www.placecage.com/gif/75/50" class="preview" />
			Three
		</a>
	</div>

<div class="block-list block-list--bordered">
	<a class="block-list__item" href="#">
		<button type="button" class="remove-button" data-toggle="tooltips" data-placement="right" title="" data-action="remove" data-action-target="' ~ target ~ '" data-original-title="Remove this item"><i class="icon-remove-sign"></i></button>
		<img src="http://www.placecage.com/g/75/50" class="preview" />
		One
	</a>
	<a class="block-list__item" href="#">
		<button type="button" class="remove-button" data-toggle="tooltips" data-placement="right" title="" data-action="remove" data-action-target="' ~ target ~ '" data-original-title="Remove this item"><i class="icon-remove-sign"></i></button>
		<img src="http://www.placecage.com/75/50" class="preview" />
		Two
	</a>
	<a class="block-list__item" href="#">
		<button type="button" class="remove-button" data-toggle="tooltips" data-placement="right" title="" data-action="remove" data-action-target="' ~ target ~ '" data-original-title="Remove this item"><i class="icon-remove-sign"></i></button>
		<img src="http://www.placecage.com/gif/75/50" class="preview" />
		Three
	</a>
</div>
