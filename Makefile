# docker-composeコマンド
up:
	docker-compose up -d
build:
	docker-compose up -d --build
down:
	docker-compose down
restart:
	docker-compose down
	docker-compose up -d --build

# nuxtの導入(ファイルの追記あり)
nuxt:
	npx create-nuxt-app client
	cp .env.example .env
	docker-compose up -d --build
	docker-compose exec client yarn add @nuxtjs/proxy @nuxtjs/dotenv
	docker-compose exec client touch .env

# prismaのマイグレーションとGUIの実行
migrate:
	docker-compose exec api yarn prisma:migrate
	docker-compose exec api yarn prisma:db

# typescriptの導入(ファイルの追記あり)
typescript:
	docker-compose exec client yarn add --dev @nuxt/types
	docker-compose exec client touch shims-vue.d.ts

# composition-apiの導入(ファイルの追記あり)
composition-api:
	docker-compose exec client yarn add @nuxtjs/composition-api

# storybookの起動
storybook:
	docker-compose exec client npx sb init
	docker-compose exec client yarn storybook

# storybookの再起動
re-storybook:
	docker-compose exec client yarn storybook