package main;

import org.junit.Test;

import static org.junit.Assert.*;

public class helloTest {

    @Test
    public void testXVariable() throws Exception {

        hello h = new hello();
        int result = h.xVariable();

        assertEquals(6, result);

    }


}