# *Code* by Charles Petzold — Chapters 1–11

## Electrical Circuits as a Means of Communication

At the beginning of the book, Charles Petzold explains how a simple electrical circuit works.

A circuit can have two basic states:

- The circuit is open, so electric current does not flow.
- The circuit is closed, so electric current flows.

These two states can be used to transmit information over a distance. By switching a signal on and off in a particular sequence, people can represent letters, numbers, and other symbols.

## Coding Systems

A code is a system that represents information using a limited set of symbols or signals.

Morse code uses short and long signals to represent letters and numbers. It was especially useful for communication through the telegraph.

Braille represents characters using different combinations of raised dots. It allows blind and visually impaired people to read text by touch.

These systems show that the same information can be represented in different physical forms. The meaning does not depend on whether the information is represented by sounds, electrical signals, dots, or other symbols. What matters is that both the sender and the receiver understand the code.

## The Telegraph

A telegraph transmits messages using electrical signals.

When a telegraph key is pressed, it closes an electrical circuit and allows current to flow. The receiving device reacts to the signal and reproduces the transmitted pattern.

This made it possible to send coded messages over long distances much faster than transporting written messages physically.

## Relays

Electrical signals become weaker when they travel over long distances. Relays were used to receive a weak telegraph signal and reproduce it in another circuit.

A relay is an electrically controlled switch. It normally contains a coil and one or more movable contacts.

When electric current flows through the coil, the coil creates a magnetic field. This magnetic field moves a contact and changes the state of another circuit.

The process can be represented as:

```text
input current
→ magnetic field
→ movement of the contact
→ change in the output circuit
```

Relays made it possible to:

- Repeat telegraph signals over long distances.
- Control one electrical circuit using another circuit.
- Build more complex switching and logical systems.

## Bits and the Binary System

The word `bit` comes from the expression `binary digit`.

A bit can have only two possible values:

```text
0 or 1
```

These values can be connected to two physical states of an electrical circuit:

```text
0 — no current
1 — current is present
```

The interpretation can also be reversed in some systems. For example, `0` may represent current and `1` may represent no current. The important point is that the system distinguishes between two stable states.

Binary representation is suitable for computers because electronic circuits can reliably distinguish between two states.

A single bit contains very little information, but many bits can be combined to represent numbers, letters, instructions, images, sounds, and other types of data.

## Barcodes

A barcode represents information using a sequence of dark bars and light spaces with different widths.

A scanner detects the difference between the light and dark areas and converts them into electrical signals. The device then interprets these signals according to the rules of the barcode format.

A barcode is connected to the general idea of binary coding because information is represented using clearly distinguishable states. However, a barcode is not always a direct visual representation of an ordinary binary number. Different barcode formats use their own rules for encoding digits and checking errors.

## Logic Gates and Relay Circuits

Relays can be connected in different ways to perform logical operations.

### AND

Two contacts connected in series implement the AND operation.

Current can reach the output only when both contacts are closed.

```javascript
A && B
```

### OR

Two contacts connected in parallel implement the OR operation.

Current can reach the output when at least one contact is closed.

```javascript
A || B
```

### NOT

A normally closed relay contact can invert a signal.

When the relay is not activated, the output circuit is closed. When the relay is activated, the output circuit opens.

```javascript
!A
```

### NAND

NAND is the inverted result of AND.

```javascript
!(A && B)
```

### NOR

NOR is the inverted result of OR.

```javascript
!(A || B)
```

These circuits demonstrate that logical operations are not only abstract ideas used in programming. They can be physically implemented using wires, electricity, magnets, switches, and relays.

## Connection to Modern Computers

Relays demonstrated that logical operations could be implemented using physical switching devices.

Modern computers do not normally use relays for processing. Instead, they use transistors. Transistors are much smaller, faster, more reliable, and consume less energy.

However, their basic role is similar: they control electrical signals and can behave like extremely fast switches.

Transistors are combined to create logic gates. Logic gates are combined to create more complicated circuits. These circuits eventually form processors, memory, and other components of a computer.

The development can be represented as:

```text
electrical circuits
→ two distinguishable states
→ bits
→ logical operations
→ logic gates
→ large networks of transistors
→ processors and computers
```

## Main Conclusion

The main idea I learned from these chapters is that information can be represented by a code, and a code can be represented by physical states.

Modern computers perform extremely complicated operations, but their foundation consists of a huge number of simple switching operations between two states.

Relays, electrical circuits, binary representation, and logical operations became important foundations for the development of computers. A modern processor is essentially an enormous network of transistors organized to store information and perform logical and mathematical operations.