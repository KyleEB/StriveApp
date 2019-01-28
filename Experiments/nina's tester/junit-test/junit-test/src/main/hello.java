package main;

public class hello {

    public static void main(String[] args) {
        System.out.println("Hello World!");

        hello h = new hello();

        System.out.println(h.xVariable());
    }

    public int xVariable(){
        int x = 5;
        x++;
        return x;
    }
}
