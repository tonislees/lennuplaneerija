package com.lennuplaneerija.back;

import com.lennuplaneerija.back.andmepääsukiht.Lend;
import com.lennuplaneerija.back.andmepääsukiht.LendAndmehoidla;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class BackApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackApplication.class, args);
	}

//	@Bean
//	CommandLineRunner commandLineRunner(LendAndmehoidla repository, LendAndmehoidla lendAndmehoidla) {
//		return args -> {
//			Lend tallinnHelsingi = new Lend("Helsingi", 120, "Tallinn");
//			lendAndmehoidla.save(tallinnHelsingi);
//		};
//	}


}
