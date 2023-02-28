package HomeActivities;

import java.util.Scanner;

public class simulator {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int []Registers = {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};
		int []Memory = {10,20,30,40,50,60,70,80,90,30,50,60,70,80,90,10};
		System.out.println("Please enter instruction(1,3,5): ");
		Scanner scanner = new Scanner(System.in);
		int instruction = scanner.nextInt();
		System.out.println("Please enter register(0-15): ");
		scanner = new Scanner(System.in);
		int reg = scanner.nextInt();
		String register= "R"+reg;
		System.out.println("Please enter Memory(0-15): ");
		scanner = new Scanner(System.in);
		int mem = scanner.nextInt();
		String memory = "M"+mem;
		System.out.println("***********************************************************ISA Simulator***********************************************************");
		System.out.println("*************************************************************Cycle #1**************************************************************");
		System.out.println("Fetch Instruction			    	      Decode Instruction			    	         Execute Instruction");
		System.out.println(instruction+"	"+reg+"	"+mem);
		System.out.println();
		System.out.print("Register: ");
		for(int i =0; i < Registers.length; i++) {
			System.out.print(Registers[i]+"	");
		}
		System.out.println();
		System.out.println("###################################################################################################################################");
		System.out.print("Memory:  ");
		for(int i =0; i < Memory.length; i++) {
			System.out.print(Memory[i]+"	");
		}
		System.out.println();
		System.out.println();
		System.out.println();
		System.out.println();
		System.out.println();
		System.out.println();
		System.out.println("***********************************************************ISA Simulator***********************************************************");
		System.out.println("*************************************************************Cycle #2**************************************************************");
		System.out.println("Fetch Instruction			    	      Decode Instruction			    	         Execute Instruction");
		System.out.println(instruction+"	"+reg+"	"+mem+"			    	      "+"LOAD");
		System.out.println("			    	                      REGISTER "+register);
		System.out.println("			    	                      MEMORY   "+memory);
		System.out.println();
		System.out.print("Register: ");
		for(int i =0; i < Registers.length; i++) {
			System.out.print(Registers[i]+"	");
		}
		System.out.println();
		System.out.println("###################################################################################################################################");
		System.out.print("Memory:  ");
		for(int i =0; i < Memory.length; i++) {
			System.out.print(Memory[i]+"	");
		}
		System.out.println();
		System.out.println();
		System.out.println();
		System.out.println();
		System.out.println();
		System.out.println();
		System.out.println("***********************************************************ISA Simulator***********************************************************");
		System.out.println("*************************************************************Cycle #3**************************************************************");
		System.out.println("Fetch Instruction			    	      Decode Instruction			    	         Execute Instruction");
		System.out.println(instruction+"	"+reg+"	"+mem+"			    	      "+"LOAD");
		System.out.println("			    	                      REGISTER "+register);
		System.out.println("			    	                      MEMORY   "+memory);
		System.out.println();
		int temp=0;
		for(int i =0; i <= mem; i++) {
			if(i == mem) {
				temp = Memory[i];
			}
		}
		System.out.print("Register: ");
		for(int i =0; i < Registers.length; i++) {
			if(i==reg) {
				Registers[i]=temp;
				System.out.print(Registers[i]+"	");
			}
			else {
				System.out.print(Registers[i]+"	");
			}
			
		}
		System.out.println();
		System.out.println("###################################################################################################################################");
		System.out.print("Memory:  ");
		for(int i =0; i < Memory.length; i++) {
			System.out.print(Memory[i]+"	");
		}
	}

}
