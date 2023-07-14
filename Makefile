.PHONY: stop setup test e2e dev
.SILENT: stop setup test e2e dev

setup: stop
	rm -Rf .next cache node_modules .vercel
	TEST_TYPE="none" docker-compose up setup
	TEST_TYPE="none" docker-compose down

stop:
	TEST_TYPE="none" docker-compose down

test:
<<<<<<< HEAD
	xhost +local:* >/dev/null
	TEST_TYPE=component docker-compose up -d cypress

e2e:
	xhost +local:* >/dev/null
	TEST_TYPE=e2e docker-compose up -d cypress
=======
  xhost +local:*
	docker-compose up -d cypress-components

e2e:
  xhost +local:*
	docker-compose up -d cypress-e2e
>>>>>>> 34279a5 (Training Session 2 complete)

dev:
	rm -Rf .next/cache
	docker-compose up -d dev
