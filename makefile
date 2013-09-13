HR = \n---------------------------------------------
HEADER = ---------------------------------------------\n _____  _    _ _       _____         _____   \n|  __ \| |  | | |     / ____|  /\   |  __ \  \n| |__) | |  | | |    | (___   /  \  | |__) | \n|  ___/| |  | | |     \___ \ / /\ \ |  _  /  \n| |    | |__| | |____ ____) / ____ \| | \ \  \n|_|     \____/|______|_____/_/    \_\_|  \_\ \n\n---------------------------------------------
CHECK=\033[32m✔\033[39m

BUILD := build

build:
	@ echo "${HEADER}"

	@ echo "Installing Composer packages...${HR}"
	@ sudo php composer.phar install
	@ echo "\n${CHECK} Done"

	@ echo "${HR}\nInstalling front-end libraries...${HR}"
	@ bower install
	@ echo "\n${CHECK} Done"

	@ echo "${HR}\nInstalling Grunt and it's libraries...${HR}"
	@ npm install
	@ echo "\n${CHECK} Done"

	@ echo "${HR}\nInstalling Git hooks...${HR}"
	@ cp hooks/* .git/hooks/
	@ chmod -R u+x .git/hooks/*
	@ echo "\n${CHECK} Done\n"

	@ echo "Run 'grunt' to start the documentation server and 'grunt watch' to monitor for Sass changes."

clean:
	@ echo "${HEADER}"
	@ echo "Removing Composer packages...${HR}"
	@ rm -rf vendor/*
	@ echo "\n${CHECK} Done"

	@ echo "${HR}\nRemoving front-end libraries...${HR}"
	@ rm -rf libs/*
	@ echo "\n${CHECK} Done"

	@ echo "${HR}\nRemoving GIT hooks...${HR}"
	@ rm -rf .git/hooks/*
	@ echo "\n${CHECK} Done\n"	