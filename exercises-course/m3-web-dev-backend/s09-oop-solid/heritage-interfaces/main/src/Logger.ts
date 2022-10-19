interface Logger {
  log(entry:string): void;
}

interface Database {
logger: Logger;
  save(key: string, value: string): void;
}

class ConsoleLogger implements Logger {
  log(entry: string) {
    console.log(`${entry} from Logger`)
  }
}

class ConsoleLogger2 implements Logger {
  log(entry: string) {
    console.log(`${entry} from Logger 2`)
  }
}

class ExampleDatabase implements Database {
  logger: Logger;
  constructor(logger: Logger) {
    this.logger = logger;
  }

  save(key: string, value: string): void {
    this.logger.log(`saving ${value} in ${key}`)
  }
}

const log1 = new ConsoleLogger();
const log2 = new ConsoleLogger2();

const db1 = new ExampleDatabase(log1);
const db2 = new ExampleDatabase(log2);

db1.save('felipe', 'gg');
db2.save('geo', 'op');
