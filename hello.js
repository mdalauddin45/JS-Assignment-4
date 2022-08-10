function oilPrice(diselQuantity, patrolQuantity, octaneQuantity) {
    let diselPrice = 114;
    let patrolPrice = 130;
    let octanePrice = 135;

    // Disel 
    const totalDiselPrice = diselPrice * diselQuantity;
    const disel = totalDiselPrice;
    console.log(disel);

    // Patrol
    const totalPatrolPrice = patrolPrice * patrolQuantity;
    const patrol = totalPatrolPrice;
    console.log(patrol);

    // Octan
    const totalOctanePrice = octanePrice * octaneQuantity;
    const octane = totalOctanePrice;
    console.log(octane);

    //Total price
    const totalOilPrice = patrol + disel + octane;
    console.log(totalOilPrice);

}
oilPrice(2, 4, 1);

