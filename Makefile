install:
	npm ci;

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

brain-even:
	node bin/brain-even

fix:
	npx eslint . --fix

brain-calc:
	node bin/brain-calc.js

brain-gcd:
	node bin/brain-gcd
